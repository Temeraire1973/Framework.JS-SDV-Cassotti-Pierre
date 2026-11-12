<template>
    <div>
        <NuxtImg
        format="avif,webp,png"
        :src="src" 
        :style="styleImage"
        />
    </div>
</template>

<script setup>
    const props = defineProps({
        src: { type: String, default: '/Images/BatailleNavale.png"'},
        styleImage: {type : String, default: "width: auto; height:auto ;"}
    })
</script>

<style scoped>
    
</style>