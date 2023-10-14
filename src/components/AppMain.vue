<template>
    <div class="app-main">
        <div class="app-main__content container">
            <slot name="mainContent"></slot>        
        </div>
    </div>
</template>

<script>

export default {
    name: "AppMain",
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/appMain/app-main";
</style>