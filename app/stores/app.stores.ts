// config que l'utilisateur peut choisir (couleurs, langues, dark/light ...)
// Exemple
export const useAppStore = defineStore('app', ()=> {
    const darkMode = ref(false)

    const darkmodeChange = () => {
        darkMode.value = !darkMode.value
    }
    return{
        darkmodeChange,
        darkMode
    }
})

