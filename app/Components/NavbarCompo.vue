<template>
    <ul class="toto">
        <button class="blabla" v-for="(item) in projets" :key="`navBarElement-${item.id}`">
            <NuxtLink :to="`${item.url}`">{{item.name}}</NuxtLink>
        </button>
    </ul> 
</template>
    
<script setup>
const props = defineProps({
    projets: {type : Array, default: [{name: "Accueil", url: "/"},{name:"Projet 1", url:"/projets/1"},{name:"Projet 2", url:"/projets/2"},{name:"Projet 3", url:"/projets/3"},{name:"Projet 4", url:"/projets/4"}]} 
})
    
</script>

<style scoped>
button{
    background-color: white;
    color: black;
    border-radius: 50px 25px;
    padding: 0.6em 1.2em;
    gap: 10%;
}
</style>