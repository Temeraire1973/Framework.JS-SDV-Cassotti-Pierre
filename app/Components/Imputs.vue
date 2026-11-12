<template>
    <div>
        <label for="firstname">{{objet}}</label>
        <NuxtIcon key="" name=""/>
        <input type="text" id="firstname" v-model="model"/>
        <span>{{ error }}</span>
    </div>
</template>

<script setup>
    const props = defineProps({
        objet: { type : String, default : "" },
        error: { type : String, default : "" }
    })

    const model = defineModel()
</script>

<style scoped>

</style>