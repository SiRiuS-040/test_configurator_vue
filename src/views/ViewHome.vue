<template>
    <div class="app-body">
        <AppHeader/>
        <AppMain>
            <template #mainContent>
                <Transition>
                    <PageHome/>
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
    import PageHome from "../components/PageHome.vue";
</script>
