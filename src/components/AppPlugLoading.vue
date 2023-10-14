<template>
    <section class="app-plug">
        <img src="../assets/img/loading.gif" alt="" width="40" height="40" class="app-404-plug__image">
        <p>
            Загружаются данные курсов валют
        </p>
    </section>
</template>

<script>

export default {
    name: "AppPlugLoading",
    props: {
        componentData: {
            type: Object,
        }
    },
}
</script>

<style lang="scss">
    @import "../assets/variables";
    @import "../components/styles/appPlug/app-plug";
</style>