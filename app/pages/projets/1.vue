<template>
    <div>
        <h1>Premier projet : le conquest</h1>
        <ImageProjet
        src="/ImagesVue/Conquest.png"
        styleImage="width: 680px; height:auto;"/>
        <p>Voici donc mon tout premier projet.<br>
        Ce projet m'a permis d'acquérir une toute première expérience en programmation. <br>
        Dans ce projet a été vu les boucles de bases ainsi que la logique de programmation.<br>
        Le principe du jeu est simple : étendre sa flotte spatiale et conquérir les bases des joueurs adverses jusqu'à ce qu'il ne reste qu'un surviviant. <br>
        Pour cela, chaque joueur joue à tour de rôle, et des soldats sont générés sur toute les planètes conquises.<br>
        A chaque combat, le joueur ayant le plus de soldat gagne la bataille et acquiert la planète.<br>
        On peut jouer de 2 à 10 joueurs avec potentiellement des bots et des classes avec des pouvoirs spéciaux.</p>
    </div>
</template>

<script setup>
import { useAppStore } from '~/stores/app.stores';

    
</script>

<style scoped>
div{
    text-align: center;
}
p{
    text-align:left;
}
</style>