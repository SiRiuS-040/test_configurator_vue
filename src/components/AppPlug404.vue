<template>
    <section class="app-plug">
        <img src="../assets/img/404.png" alt="" width="280" height="200" class="app-404-plug__image">
        <h2 class="app-plug__text">
            Ошибка запуска приложения
        </h2>
        <p>
            (возможно неполадки с сетью / API)
        </p>
    </section>
</template>

<script>

export default {
    name: "AppPlug404",
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