<template>
    <div class="app-body">
        <AppHeader/>
        <AppMain>
            <template #mainContent>
                <Transition>
                    <PageResult/>
                </Transition>
            </template>
        </AppMain>
        <AppFooter/>
    </div>
</template>

<script setup>
    import AppHeader from "../components/AppHeader.vue";
    import AppMain from "../components/AppMain.vue";
    import AppFooter from "../components/AppFooter.vue";
    import PageResult from "../components/PageResult.vue";
</script>
