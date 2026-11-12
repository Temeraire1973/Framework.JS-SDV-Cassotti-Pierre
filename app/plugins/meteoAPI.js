// export default defineNuxtPlugin((nuxtApp) => {
//     const meteoAPI = {
//         // l'ensemble de nos calls API
//         getMeteo: async (city) => {
//             return await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=fr`)
//         },
//         setMeteo: async (city, data) => {
//             return await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHERMAP_API_KEY}&units=metric&lang=fr`, {
//                 method: 'POST',
//                 body: data
//             })
//         },


//         return :{
//             provide: {
//                 meteoAPI
//             }
//         }
// }})

//Utiliser une API externe dans vos apps
//Faire une requête GET pour récupérer la liste des pokémons
//requete POST pour créer pokemon (si possible)
//plugin pour centraliser les requetes api