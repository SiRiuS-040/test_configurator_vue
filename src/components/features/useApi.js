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