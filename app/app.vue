
<template>
  <div id="bg">
    <!-- Permet d'appeler les différents composants -->
    <!-- <Toto2/> -->
    <!-- <EssaiBoutton
      texte="Bouton 1"
      :ShowIcon="false"
      @clickUs="mafonction"
    />
    
    <li v-if="hastobeshowned"> On a clické sur le bouton </li>
    {{ hastobeshowned }}  -->
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
    
  </div>
</template>

<script setup>
  const { darkMode } = storeToRefs(useAppStore())
  const back = computed(() => darkMode.value ? 'linear-gradient(141deg,rgba(98, 163, 109, 1) 0%, rgba(106, 130, 73, 1) 27%, rgba(87, 158, 89, 1) 44%, rgba(132, 156, 89, 1) 76%, rgba(89, 128, 108, 1) 100%)' : 'radial-gradient(circle at 20% 30%, #38216b 0%, transparent 40%),radial-gradient(circle at 80% 20%, #123b63 0%, transparent 40%),radial-gradient(circle at 50% 90%, #241044 0%, transparent 45%),#080b16')
  const couleur = computed(() => darkMode.value ? 'black' : 'white')
// let hastobeshowned = ref(false)
// const mafonction = (event) => {
//   hastobeshowned.value = !hastobeshowned.value ,
//   console.log(event, hastobeshowned)
  
// }
</script>

<style lang="css">
#bg, html, body, input, select, textarea,button{
  background: v-bind(back);
  color: v-bind(couleur);
}
#bg{
  min-height: 100vh;
}
/* #blanc{
  background-color: blue;
} */
</style>
<!-- <li v-for="(item, index) in items" :key="item.id"> -->
<!--  {{index+1}} -->