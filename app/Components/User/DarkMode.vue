<template>
    <button @click="darkmodeChange">{{ name }}</button>
</template>

<script setup>
    const { darkmodeChange } = useAppStore()
    const { darkMode } = storeToRefs(useAppStore())
    const name = computed(() => darkMode.value ? 'Darkmode' : 'Lightmode')
    const bckgrnd = computed(() => darkMode.value ? 'linear-gradient(141deg,rgba(98, 163, 109, 1) 0%, rgba(106, 130, 73, 1) 27%, rgba(87, 158, 89, 1) 44%, rgba(132, 156, 89, 1) 76%, rgba(89, 128, 108, 1) 100%)' : 'radial-gradient(circle at 20% 30%, #38216b 0%, transparent 40%),radial-gradient(circle at 80% 20%, #123b63 0%, transparent 40%),radial-gradient(circle at 50% 90%, #241044 0%, transparent 45%),#080b16')
    const color = computed(() => darkMode.value ? 'black' : 'white')
</script>

<style scoped>
button{
    width: 100px;
    height: 50px;
    color: v-bind(color);
    background: v-bind(bckgrnd);
}

</style>