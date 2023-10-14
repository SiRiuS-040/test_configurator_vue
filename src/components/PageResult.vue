<template>
    <div
        class="app-page"
    >
        <AppPlug404 v-if="is404Plug && !isLoading" />
        <section 
            v-if="isPageDataLoaded && !isLoading"
            class="app-page__content"
        >
            <div 
                v-if="isOfflinePlug"
                class="configurator__section alert"
            >
                <p class="configurator__title">Работа в Оффлайн режиме!!! Пожалуйста запустите проект и сервер  локально</p>
            </div>
            <router-link 
                to="/"
            >
                <p class="configurator__link configurator__section">Ссылка на конфигуратор</p>
            </router-link>
            <div class="configurator__result configurator__section">
                <h2 
                    v-if="!appPageData.savedConfigs.length"
                    class="configurator__title"
                >
                    Нет сохраненных конфигов
                </h2>
                <div 
                    v-if="appPageData.savedConfigs.length"
                >
                    <h2 class="configurator__title">Сохраненные конфигурации:</h2>
                    <ul 
                        v-if="appPageData.savedConfigs.length"
                        class="configurator-result__list"
                    >
                        <li
                            v-for="(item, index) in appPageData.savedConfigs"
                            :key="index"
                            class="configurator-result-item"
                        >
                            <p class="configurator-result-item__desc">
                                {{ `Тип:${appPageData.typeNames[item.formType]},   Программ: ${item.coffePrograms},   Приготовлений за раз: ${item.sameMakingSpots}` }}
                            </p>
                            <div class="configurator-result-item__controls-wrapper">
                                <div class="configurator-result-item__count-wrapper">
                                    <button 
                                    @click="incrCount(item)"
                                    class="configurator-result-item__controls"
                                    >
                                        -
                                    </button>
                                    <span class="configurator-result-item__count"> {{ item.count }}</span>
                                    <button 
                                        @click="decrCount(item)"
                                        class="configurator-result-item__controls"
                                    >
                                        +
                                    </button>
                                </div>

                                <button 
                                    @click="deleteConfig(index)"
                                    class="configurator-result-item__controls"
                                >
                                    Удалить конфиг
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </section>
    </div>
</template>

<script>

import AppPlug404 from "./AppPlug404.vue"
import {useApi} from "@/components/features/useApi"

export default {
    name: "PageResult",
    components: {
        AppPlug404,
    },
    mounted() {

    },
    setup( ){
        const {
            appPageData,
            isPageDataLoaded,
            isLoading,
            is404Plug,
            isOfflinePlug
        } = useApi('')

        function incrCount(item) {
            if (item.count > 1)  {
                item.count--
            }    
        }
        function decrCount(item) {
            item.count++
        }
        function deleteConfig(index) {
            appPageData.savedConfigs.splice(index, 1)
        }
        
        return {
            appPageData,
            isPageDataLoaded,
            is404Plug,
            isLoading,
            isOfflinePlug,
            incrCount,
            decrCount,
            deleteConfig
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/pageHome/app-page-home";
</style>