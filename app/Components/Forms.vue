// voici le cour pour faire un bon formulaire avec un plugin 
<template>
    <div class="test">
        <form method="post" novalidate @submit.prevent="onSubmit">
            <Imputs v-model="firstname" :error="firstnameError" :objet="Prénom"/>
            <Imputs v-model="name" :error="nameError" :objet="Nom"/>
            
            <!-- <div>
                <label for="name">Nom</label>
                <NuxtIcon key="" name=""/>
                <input type="text" id="name" v-model="name"/>
                <span>{{ nameError }}</span>
            </div>
            <div>
                <label for="firstname">Prénom</label>
                <NuxtIcon key="" name=""/>
                <input type="text" id="firstname" v-model="firstname"/>
                <span>{{ firstnameError }}</span>
            </div>
            <input type="text" id="name" v-model="name"/>
            <input type="text" id="firstname" v-model="firstname"/> -->
            <button type="submit" :disabled="isSubmitting">Submit</button>
            {{ name }}
            <!-- {{ nameError }} -->
            {{ firstname }}
            <!-- {{ firstnameError }} -->
        </form>
        
    </div >
</template>
//créer un formulaire de connexion
//relier notre formulaire à notre store
//créer un composant atomic pour les imputs
<script lang="js" setup>
import { useForm } from 'vee-validate';
import { useField } from 'vee-validate';

//const {viewedProfile, fetchViewedProfile} = useViewedProfile(profileId);

const { handleSubmit, isSubmitting } = useForm({
    initialValues :{
        name:"Pierre",
        firstname:"Benoit"
    }
})

const { value:firstname, errorMessage:firstnameError } = useField('firstname', 'required|min:3')
const { value:name, errorMessage:nameError } = useField('name', 'required|min:3')

const onSubmit = handleSubmit((values) => {
    console.log(values)
})

// test de data fetching
// const{$meteoAPI} = useNuxtApp()

// const { data, refresh, error } = await useAsyncData('geography-data', () => {
//     return callAPI = $meteoAPI.getMeteo('Paris')
//     return callAPI
// })

// // on appui sur un bouton
// const fetchData = () => {
//     $fetch('www.meteo.fr/api/geography', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     }
//     }).then((response) => {
//         console.log(response)
//     }).catch((error) => {
//         console.error(error)
//     })
// }


</script>

<style scoped>
form{
    padding-left: 3%;
}
</style>