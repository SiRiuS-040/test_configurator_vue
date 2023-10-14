<template>
    <div
        class="app-page"
    >
        <AppPlug404 v-if="is404Plug && !isLoading" />
        <section 
            v-if="isPageDataLoaded && !isLoading"
            class="app-page__content"
        >
            <div class="configurator">
                <div 
                    v-if="isOfflinePlug"
                    class="configurator__section alert"
                >
                    <p class="configurator__title">Работа в Оффлайн режиме!!! Пожалуйста запустите проект и сервер  локально</p>
                </div>
                <router-link 
                    to="/result"
                >   
                    <p class="configurator__link configurator__section">Ссылка на сохраненные шаблоны</p>
                </router-link>
                <div class="configurator__result configurator__section">
                    <h2 class="configurator__title">Текущая выбрання кофигурация:</h2>
                    <div class="configurator__result-list">
                        <AppConfiguratorResultType
                            v-if="currentConfig.formType != undefined"
                            :itemData="appPageData.typeNames[currentConfig.formType]"
                            :imgPath="require(`../assets/img/form-${currentConfig.formType}.png`)"
                            desc="Тип"
                            class="configurator__result-type configurator__result-type--form"
                        />                        
                        <AppConfiguratorResultType
                            v-if="currentConfig.coffePrograms != undefined"
                            :itemData="currentConfig.coffePrograms"
                            :imgPath="require(`../assets/img/programs-${currentConfig.coffePrograms}.jpg`)"
                            desc="Программ"
                            class="configurator__result-type configurator__result-type--programs"
                        /> 
                        <AppConfiguratorResultType
                            v-if="currentConfig.sameMakingSpots != undefined"
                            :itemData="currentConfig.sameMakingSpots"
                            :imgPath="require(`../assets/img/cups-${currentConfig.sameMakingSpots}.jpg`)"
                            desc="Приготовлений за раз"
                            class="configurator__result-type configurator__result-type--spots"
                        /> 
                    </div>
                    <h2 v-if="!isCanSave">Для сохранения выберите все опции</h2>
                    <button 
                        v-if="isCanSave"
                        @click="saveCurrentConfig"
                        class="configurator__save"
                    >
                        сохранить выбранную конфигурацию
                    </button>
                </div>
                <div class="configurator__section">
                    <h2 class="configurator__title">Конфигуратор</h2>
                    <h3 class="configurator__option-title">Выберите тип аппарата:</h3>
                    <ul class="configurator__type-list">
                        <AppConfiguratorItem
                            v-for="(type, index) in appPageData.formTypes"
                            :key="index"
                            :itemData="appPageData.typeNames[type]"
                            :imgPath="require(`../assets/img/form-${type}.png`)"
                            @click="getItemType(type)"
                            class="configurator__type-item"
                        />
                    </ul>
                    <h3 class="configurator__option-title">Выберите желаемое кол-во  программ приготовления:</h3>
                    <ul class="configurator__type-list">
                        <AppConfiguratorItem
                            v-for="(type, index) in appPageData.coffePrograms"
                            :key="index"
                            :itemData="type"
                            :imgPath="require(`../assets/img/programs-${type}.jpg`)"
                            @click="getCoffePrograms(type)"
                            
                            class="configurator__type-item"
                        />
                    </ul>
                    <h3 class="configurator__option-title">Выберите по кол-ву мест под одновременное приготовление:</h3>
                    <ul class="configurator__type-list">
                        <AppConfiguratorItem
                            v-for="(type, index) in appPageData.sameMakingSpots"
                            :key="index"
                            :itemData="type"
                            :imgPath="require(`../assets/img/cups-${type}.jpg`)"
                            @click="getSameMakingCups(type)"
                            class="configurator__type-item"
                        />
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {reactive, computed} from "vue"
import AppPlug404 from "./AppPlug404.vue"
import {useApi} from "@/components/features/useApi"
import AppConfiguratorItem from "./AppConfiguratorItem.vue"
import AppConfiguratorResultType from "./AppConfiguratorResultType.vue"

export default {
    name: "PageHome",
    components: {
        AppConfiguratorItem,
        AppConfiguratorResultType,
        AppPlug404,
    },
    mounted() {

    },
    setup( ){
          const {
            appPageData,
            isPageDataLoaded,
            is404Plug,
            isLoading,
            isOfflinePlug
        } = useApi('')

        const currentConfig = reactive({
            formType: undefined,
            coffePrograms: undefined,
            sameMakingSpots: undefined,
        })

        let isDub = false

        const isCanSave = computed(() => {
            return currentConfig.formType !== undefined && currentConfig.coffePrograms !== undefined && currentConfig.sameMakingSpots !== undefined ? true : false
        })

        function getItemType(type) {
            currentConfig.formType = type
        }
        function getCoffePrograms(type) {
            currentConfig.coffePrograms = type
        }
        function getSameMakingCups(type) {
            currentConfig.sameMakingSpots = type
        }
        function resetCurrentConfig() {
            currentConfig.formType = undefined 
            currentConfig.coffePrograms = undefined 
            currentConfig.sameMakingSpots = undefined
        }  

        function checkDubs(newConfig) {
            const savedConfs = appPageData.savedConfigs
            if (savedConfs.length) {
                savedConfs.forEach((conf) => {
                    let dubKeys = 0
                    for (let key in conf) {
                        if( key !== 'count' ) {
                            if ( conf[key] === newConfig[key]) {
                                dubKeys++
                            } else {
                                return
                            }
                        }
                    }
                    if (dubKeys === 3) {
                        conf.count++
                        isDub = true
                    }
                })
            }
        }

        function saveCurrentConfig() {
            checkDubs(currentConfig)
            if (isDub === false) {
                currentConfig.count = 1
                const readyConfig = reactive({})
                Object.assign(readyConfig, currentConfig)
                appPageData.savedConfigs.push(readyConfig)
            }
            isDub = false
            localStorage.configs = JSON.stringify(appPageData.savedConfigs)
            resetCurrentConfig()
            // console.log(localStorage.configs);
        }
        
        return {
            appPageData,
            isPageDataLoaded,
            is404Plug,
            isLoading,
            isOfflinePlug,
            currentConfig,
            isCanSave,
            getItemType,
            getCoffePrograms,
            getSameMakingCups,
            saveCurrentConfig
         }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/pageHome/app-page-home";
</style>