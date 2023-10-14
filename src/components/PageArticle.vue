<template lang="pug">
div(v-if="!isLoading" class="app-page")
    AppPlug404(v-if="is404Plug")
    section(v-if="isPageDataLoaded" class="app-page__content")
        component(v-for="componentData in appPageData.body" :is="componentName[componentData.type]" :componentData="componentData" :key="componentData.id")
</template>

<script>

import { useRoute } from 'vue-router'
import { blogComponents } from "./features/blogComponents";
import AppArticleIntroBlock from "./AppArticleIntroBlock.vue";
import AppArticleTextBlock from "./AppArticleTextBlock.vue";
import AppArticleImageBlock from "./AppArticleImageBlock.vue";
import AppArticleSliderBlock from "./AppArticleSliderBlock.vue";
import AppArticleListBlock from "./AppArticleListBlock.vue";
import AppCtaFormBlock from "./AppCtaFormBlock.vue";
import AppSubscribeFormBlock from "./AppSubscribeFormBlock.vue";
import AppPlug404 from "./AppPlug404.vue";
import {useApi} from "@/components/features/useApi";

export default {
    name: "PageArticle",
    components: {
        AppArticleIntroBlock,
        AppArticleTextBlock,
        AppArticleImageBlock,
        AppArticleSliderBlock,
        AppArticleListBlock,
        AppCtaFormBlock,
        AppSubscribeFormBlock,
        AppPlug404
    },

    setup() {
        const route = useRoute();
        const pagePath = route.path;
        const componentName = blogComponents;

        const {
            appPageData,
            isPageDataLoaded,
            is404Plug,
            isLoading,
        } = useApi(pagePath)

        return {
            componentName,
            appPageData,
            isPageDataLoaded,
            is404Plug,
            isLoading,
        }
    },
}
</script>

<style lang="scss">
    @import "../assets/variables";
    @import "../components/styles/pageArticle/app-page-article";
</style>