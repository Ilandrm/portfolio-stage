<script setup>
</script>

<template>
    <header>
        <nav class="d-flex flex-row">
            <h1>Ilan Darmon</h1>
            <div class="d-flex flex-row">
             <div class="ensLienIcone"><font-awesome-icon :icon="['fas', 'house']" /><RouterLink to="#">Accueil</RouterLink></div>
             <div class="ensLienIcone"><font-awesome-icon :icon="['fas', 'diagram-project']" /><RouterLink to="#">Projets</RouterLink></div>
             <div class="ensLienIcone"><font-awesome-icon :icon="['fas', 'address-book']" /><RouterLink to="#">Contact</RouterLink></div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
nav{
    justify-content: space-between;
    align-items: center;
}
h1{
    font-weight: bolder;
    font-size: 25px;
    margin-left: 1rem;
}
a{
    color: #7D4FFE;
    text-decoration: none;
    margin-left:10px ;
}
.ensLienIcone:hover{
    background-color: #C49FFF;
}
.ensLienIcone{
    padding: 1.5rem;
}
svg{
    color: white;
    margin-right: 1rem;
}
</style>
