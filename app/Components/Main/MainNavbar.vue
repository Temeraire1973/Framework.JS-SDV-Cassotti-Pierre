<template>
    <header id="background_couleur">
        <div class="quelque">
            <h1 id="titre_principal">Mon Portfolio</h1>
            <!-- <li><NuxtLink to="/about">About Me</NuxtLink></li> -->
            <NavbarCompo/>         
        </div>

    </header>
</template>

<script setup>

</script>

<style scoped>
.quelque{
    display: flex;
    flex-direction: column;
    margin-left:auto; 
    margin-right:auto; 
}
.toto{
    display: flex;
    list-style: none;
    gap: 100px;
    flex-direction: row;
}
.blabla{
    /* display: flex; */
    /* flex-direction:column; */
    text-align: center;
    margin-left:auto; 
    margin-right:auto; 
    gap : 10%;
    
}
#titre_principal{
    display: flex;
    margin: auto;    
}
#background_couleur{
    display: flex; 
    flex-direction: column;   
    padding-bottom: 5px;
    padding-top: 5px;
}
</style>

