<template>
    <header id="background_couleur">
        <div class="quelque">
            <h1 id="titre_principal">Mon Portfolio</h1>
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
#titre_principal{
    display: flex;
    margin: auto;    
}
.toto{
    display: flex;
    list-style: none;
    gap: 100px;
    flex-direction: row;
}
#background_couleur{
    display: flex; 
    flex-direction: column;   
    padding-bottom: 5px;
    padding-top: 5px;
}
</style>

