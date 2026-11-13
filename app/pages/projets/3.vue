<template>
    <div>
        <h1>Troisième projet : le sudoku</h1>
        <ImageProjet
        src="/ImagesVue/Sudoku.png"
        styleImage="width: 350px; height:auto;"/>
        <p>Voici mon troisième projet.<br>
        Ce projet m'a permis développer encore plus mes compétences en programmation vues en classe de terminale.<br>
        J'y ai incorporé mes acquis en algorithmie et en programmation appris lors de mon annéee de terminale.<br>
        Cette fois-ci, ce n'est plus un jeu mais un projet d'algorithmie. Je m'explique, suite à la prise de connaissace de l'algorithmie,<br>
        j'ai voulu reprendre ce sujet dans ce projet afin d'approfondir ce sujet et de le travailler.<br>
        Le but a été dans un premier temps de faire résoudre un sudoku à la machine de manière forte peu importe le temps et la mémoire prise.<br>
        Dans un second temps, j'ai réfléchi à une manière plus "intelligente et optimisée" de résoudre la grille.<br>
        </p>
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