<template>
    <div>
        <button @click="validClick">{{texte}}
        <Icon v-if="ShowIcon === true" :name = "icon"/>
        </button>
        <p v-if="isnotNone">Le titre du boutton n'est pas vide</p>
        <li v-if="ShowList">
            <p>J'ai cliqué sur le bouton</p>
        </li>
    </div>
</template>

<!-- Variable à déclarer pour les v-... -->
<script setup>

    const props = defineProps({
        texte: { type: String, default: 'Nom par défaut'},
        ShowIcon: { type: Boolean, default: true},
        icon: {type: String, default:"mingcute:ad-circle-fill"},
        isnotNone: {type: Boolean, default: true},
        ShowList: {type: Boolean, default: false}
    })

    const emit = defineEmits(['clickUs'])

    const validClick = (value) => {
       emit('clickUs', value)
    }

    // Plus besoin de ça maintenant
    // const texte = "Voici un boutton"
    // const isnotNone = true
    // const ShowIcon = true
    // const icon = "mingcute:ad-circle-fill"
</script>

<!-- Css -->
<style scoped>
#rouge{
    color: brown;
}
</style>