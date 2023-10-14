<template>
    <div class="configurator__result-type configurator-result-type">
        <img 
            :src="imgPath" 
            alt="" width="100" height="100" class="configurator-result-type__img"
        >
        <p class="configurator-result-type__desc">
            {{ `${desc}:` }}
        </p>
        <p class="configurator-result-type__value">
            {{ itemData }}
        </p>
    </div>
</template>

<script>

export default {
    name: "AppConfiguratorResultType",
    props: {
        itemData: {
            type: [String, Number]
        },
        imgPath: {
            type: String
        },
        desc: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/appConfiguratorResultType/configurator-result-type";

</style>