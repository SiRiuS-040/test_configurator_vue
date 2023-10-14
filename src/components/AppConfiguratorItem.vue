<template>
    <li 
        class="configurator-type-item"
    >
        {{ itemData }}
        <div class="configurator-type-item__img-wrapper">
            <img 
                :src="imgPath" 
                alt="" width="100" height="100" class="configurator-type-item__img"
            >
        </div>
    </li>
</template>

<script>

export default {
    name: "AppConfiguratorItem",
    props: {
        itemData: {
            type: [String, Number]
        },
        imgPath: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/appConfiguratorItem/configurator-type-item";

</style>