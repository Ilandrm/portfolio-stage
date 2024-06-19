<script setup>
import {ref,onMounted} from 'vue'
import appStage from '../components/appStage-projet.vue'
import petitbach from '../components/petitBach-projet.vue'
import pokeLook from '../components/pokelook-projet.vue'
import { useProjectStore } from '../store/projectStore.js'
import {storeToRefs} from 'pinia'
let store = useProjectStore()
let stateBack = ref(false)
let changeState = (id) =>{
    store.stateProject = id
}
onMounted(()=>{
    store.stateProject = 'list'
})

</script>
<template>
    <el-card class="project">
        <div v-if="store.stateProject=='app-stage'">
            <appStage />
        </div>
        <div v-if="store.stateProject=='petitbach'">
            <petitbach />
        </div>
        <div v-if="store.stateProject=='poke'">
            <pokeLook />
        </div>
    <transition>   
    <div v-if="store.stateProject=='list'">
            <hr class="mt-2">
        <h1 class="projets-title">Projets</h1>
        <hr class="mb-3">
        <el-scrollbar height="28rem">
        <el-card class="projetCard" @click="changeState('app-stage')">
            <template #header class="tete">
            <div class="d-flex justify-content-around ">
            <p class="titleProject"> App-stage </p>
            <p> 2024 </p>
            <img class="logoProjet" src="../assets/stage-removebg-preview.png" alt="project logo"/>
            </div>
            </template>
            <div class="d-flex justify-content-between">
                <img class="logo" src="../assets/symfony.png" alt="language">
                <img class="logo" src="../assets/java.png" alt="language">
                <img class="logo" src="../assets/Android_Studio_icon_(2023).svg.png" alt="language">
            </div>
        </el-card>
        <el-card class="projetCard" @click="changeState('petitbach')">
            <template #header class="tete">
            <div class="d-flex justify-content-around ">
            <p class="titleProject"> Petit Bach </p>
            <p> 2023 </p>
            <img class="logoProjet" src="../assets/petitbach.png" alt="project logo"/>
            </div>
            </template>
            <div class="d-flex justify-content-between">
                <img class="logo" src="../assets/PHP-logo.svg.png" alt="language">
                <img class="logo" src="../assets/JavaScript-logo.png" alt="language">
                <img class="logo" src="../assets/pixijs-logo-full-light.png" alt="language">
            </div>
        </el-card>
        <el-card class="projetCard" @click="changeState('poke')">
            <template #header class="tete">
            <div class="d-flex justify-content-around ">
            <p class="titleProject"> Pokemon Lookup</p>
            <p> 2023 </p>
            <img class="logoProjet" src="../assets/pokeLook.png" alt="project logo"/>
            </div>
            </template>
            <div class="d-flex justify-content-around">
                <img class="logo" src="../assets/JavaScript-logo.png" alt="language">
            </div>
        </el-card>
    </el-scrollbar>
</div> 
</transition> 
    </el-card>
</template>
<style lang="scss">
.project{
    margin-top: 5rem;
   width: 40rem;
   height: 35rem;
   
   p{
    font-weight: bold;
}
}

.projets-title{
    font-size: 1.5rem;
  font-weight: bolder;
  color: #fff;
  background-color: #b59bff;
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
}
.tete{
    margin: 0;
    padding: 0;
}
.titleProject{
    color: #6F46E1;
}
.projetCard{
    margin-top: 1rem;
    .logoProjet{
        width: 4rem;
    }
    .logo{
    width: 2rem;
    border: none;
    }
}
.projetCard:hover{
    background-color: #b59bff;
    cursor: pointer;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>