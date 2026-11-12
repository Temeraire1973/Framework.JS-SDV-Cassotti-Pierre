<template>
    <div>
        <div>
            <h1 id="titre">Accueil</h1>
        </div>
        <div id="block">
            <p> <br><br>Bienvenu sur le protfolio de Pierre Cassotti !<br>
                Ce portfolio a été créé de mes propres mains sur Visual Studio code avec le framework Nuxt.
                En effet, l'IA n'a pas du tout été utilisée pour la création de ce site. 
                Le but étant de vous montrer mes compétences et non celles de l'IA.
                Ce site a pour objectif de vous montrer mes projets personnels réalisés ! 
                Les projets suivants ont été réalisés en VBA (Visual Basic) en autonomie.
                Le but de ces projets est de vous démontrer mes compétences en programmation mais également en algorithmie pour la mojorité.</p>

            <ImageProjet class = "fixedtopleft"
                src="/ImagesVue/PierreCassotti.png"
                styleImage="width: 280px; height:auto; margin-left: 30%; border-radius: 25%;" /> 
        </div>
        <Forms/>
    </div>
</template>

<script setup>
    // definePageMeta({
    //     layout : 'Default'
    // })
    // pour récupérer les données du composable
    // const {viewedProfile, fetchViewedProfile} = useViewedProfile();
</script>

<style scoped>

h1{
    text-align: center;
}
#block{
    display: flex;
    justify-content: flex-end;
    /* justify-content: space-between; */
    /* margin-left:auto; 
    margin-right:auto; */
}
.fixedtopleft{
    /* text-align: center; */
    flex-direction: column;
    margin-left:auto; 
    margin-right:10%; 
}
</style>

