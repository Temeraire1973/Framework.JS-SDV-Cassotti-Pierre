<template>
    <footer id="couleur_fond">
        <DarkMode/>  
    </footer>
</template>

<script setup>

</script>

<style scoped>
footer{
    display: flex;
    flex-direction: row;
    gap: 30%;
}
#couleur_fond{
    /* background-color: azure; */
    /* display : table-row; */
    justify-content: right;
    /* justify-content: bottom; */
    padding-right: 5%;
    padding-bottom: 5%;
    bottom:0px;
    left:0px;
    right:0px;
}
.text{
    text-align: center;
}
</style>