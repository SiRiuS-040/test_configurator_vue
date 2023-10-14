import {ref, reactive} from "vue";
import apiMethods from "@/components/api/resources/apiMethods";
import {appData} from "@/components/features/appData"

export const useApi = (path) => {
    const is404Plug = ref(false)
    const isPageDataLoaded = ref(false)
    const isLoading = ref(true)
    const isOfflinePlug = ref(false)
    const appPageData = reactive({});

    const loadApiMethods = async() => {
         Object.assign(appPageData, await apiMethods.index( path ))

         if (localStorage.configs) {
            console.log('есть данные в локал сторадж');
            console.log(JSON.parse(localStorage.configs));
            const savedConfigs = JSON.parse(localStorage.configs)
            appPageData.savedConfigs = savedConfigs
        } else {
            console.log('нет данных в ЛС');
            appPageData.savedConfigs = []
        }
        
        if (appPageData.dataEmpty === true) {
            Object.assign(appPageData, appData)

            isPageDataLoaded.value = true;
            isOfflinePlug.value = true;
            isLoading.value = false;
        } else {
            isPageDataLoaded.value = true;
            isLoading.value = false;
        }
    };

    loadApiMethods().then();

    return {
        appPageData,
        isPageDataLoaded,
        isOfflinePlug,
        is404Plug,
        isLoading,
    }
}