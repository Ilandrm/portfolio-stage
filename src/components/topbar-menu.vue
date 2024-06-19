<script setup>
</script>

<template>
    <header>
        <nav class="d-flex flex-row">
            <div class="d-flex">
            <h1><router-link to="/home">Portfolio</router-link></h1>
            <button class="btn btn-primary contact">
                <router-link to="/contact">
                Contact
            </router-link>
            </button>
            </div>
            <div class="d-flex flex-row">
             <div class="ensLienIcone"><a href="https://github.com/Ilandrm"><font-awesome-icon :icon="['fab', 'github']" /></a></div>
             <div class="ensLienIcone"><a href="https://gricad-gitlab.univ-grenoble-alpes.fr/darmoni"><font-awesome-icon :icon="['fab', 'gitlab']" /></a></div>
             <div class="ensLienIcone"><a href="https://www.linkedin.com/in/ilan-darmon-0889ab1a0/"><font-awesome-icon :icon="['fab', 'linkedin']" /></a></div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">

nav{
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem
}
.contact{
    width: 5rem;
    margin-left: 4rem;
    height: 2.5rem;
    margin-top: 0.8rem;
   background-color:#6F46E1 ;
   border-color:#6F46E1;
   color: white;
    a{
        color: white;
        text-decoration: none;
    }
}
h1{
    
    a{
        font-weight: bold;
        font-size: 25px;
        margin-left: 1rem;
        color: #6F46E1;
    }
}
a{
    text-decoration: none;
}
a{
    
}

svg:hover{
    color: white;
}
svg{
    color: #7D4FFE;
    margin-right: 0.5rem;
    margin-right:2rem;
}
</style>
