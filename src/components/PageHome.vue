<template>
    <div
        class="app-page"
    >
        <!-- <AppPlugLoading v-if="isLoading" /> -->
        <AppPlug404 v-if="is404Plug && !isLoading" />
        <section 
            class="app-page__content"
        >
        <!-- v-if="isPageDataLoaded && !isLoading" -->
            <div class="configurator">
                <router-link 
                    to="/result"
                >   
                    <p class="configurator__link configurator__section">Ссылка на сохраненные шаблоны</p>
                </router-link>
                <div class="configurator__result configurator__section">
                    <h2 class="configurator__title">Текущая выбрання кофигурация:</h2>
                    <div class="configurator__result-list">
                        <AppConfiguratorResultType
                            :itemData="typeNames[currentConfig.formType]"
                            :imgPath="require(`../assets/img/form-${currentConfig.formType}.png`)"
                            desc="Тип"
                            class="configurator__result-type"
                        />                        
                        <AppConfiguratorResultType
                            :itemData="currentConfig.coffePrograms"
                            :imgPath="require(`../assets/img/programs-${currentConfig.coffePrograms}.jpg`)"
                            desc="Программ"
                            class="configurator__result-type"
                        /> 
                        <AppConfiguratorResultType
                            :itemData="currentConfig.sameMakingSpots"
                            :imgPath="require(`../assets/img/cups-${currentConfig.sameMakingSpots}.jpg`)"
                            desc="Приготовлений за раз"
                            class="configurator__result-type"
                        /> 
                    </div>
                    <button 
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
                            :itemData="typeNames[type]"
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
import {reactive, ref} from "vue"
import AppPlug404 from "./AppPlug404.vue"
// import AppPlugLoading from "./AppPlugLoading.vue"
import {useApi} from "@/components/features/useApi"
import {appData, typeNames} from "@/components/features/appData"

import AppConfiguratorItem from "./AppConfiguratorItem.vue"
import AppConfiguratorResultType from "./AppConfiguratorResultType.vue"

export default {
    name: "PageHome",
    components: {
        AppConfiguratorItem,
        AppConfiguratorResultType,
        AppPlug404,
        // AppPlugLoading
    },
    mounted() {

    },
    setup( ){
        const {
            // appPageData,
            // isPageDataLoaded,
            is404Plug,
            // isLoading,
        } = useApi('')

        const isPageDataLoaded = ref(true)
        const isLoading = ref(false)
        const appPageData = reactive(appData)

        const currentConfig = reactive({
            formType: 1,
            coffePrograms: 0,
            sameMakingSpots: 1,
            count: 1
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
        function saveCurrentConfig() {
            const readyConfig = reactive({})
            Object.assign(readyConfig, currentConfig)
            appPageData.savedConfigs.push(readyConfig)
        }
        
        return {
            appPageData,
            isPageDataLoaded,
            is404Plug,
            isLoading,
            
            typeNames,
            currentConfig,
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