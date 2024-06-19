<script setup>
import {ref} from 'vue'
import { useProjectStore } from '../store/projectStore.js'
import {storeToRefs} from 'pinia'

let store = useProjectStore()
const dialogTableVisible = ref(false)

let back = () =>{
    store.stateProject = 'list'
}
</script>
<template>
    <font-awesome-icon @click="back()" class="iconeBack" :icon="['fas', 'arrow-left']" />
    <el-scrollbar height="32rem">
        <hr class="mt-2">
        <h1 class="context-projet-title">Sujet</h1>
        <hr class="mb-3">
        <p class="response">Cherchez toutes les informations que vous souhaitez sur un Pokémon et créez l'équipe parfaite en un éclair !</p>
        <hr class="mt-2">
        <h1 class="realisation-projet-title">Réalisation</h1>
        <hr class="mb-3">
        <div class="image-container">
          <a href ="https://lynirl.github.io/pokemon-lookup/">
            <img class="logoApp" src="../assets/pokeLook.png"></a>
        </div>
        <div class="section">
          <p class="section-title" style="color: #535bf2;">Environnement Technique :</p>
          
            <div class="tool-item">
              <img src="../assets/JavaScript-logo.png">
              <h3>JavaScript</h3>
            </div>
            
        </div>
        <div class="detail-item">
          <p class="title" style="color: #535bf2;">Description :</p>
          <p class="response">Application de recherche de Pokemon et de création d'équipe</p>
        </div>
        <hr class="mt-2">
        <h1 class="ihm-projet-title">IHM</h1>
        <hr class="mb-3">
        <div class="d-flex justify-content-around">
            <img class="logoPhoto" src="../assets/poke1.png" @click="dialogTableVisible = true">
            <el-dialog  v-model="dialogTableVisible"  width="fit-content">
            <div class="d-flex justify-content-around">
            <img src="../assets/poke1.png" class="phtoCapt ">
                
            <img src="../assets/poke2.png" class="phtoCapt">
            </div>
            
            </el-dialog>
</div>
</el-scrollbar>
</template>
<style lang="scss">
.realisation-projet-title{
    background-color:#535bf2;
    font-size: 1.5rem;
  font-weight: bolder;
  color: #fff;
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
}
.tool-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
      width: 3rem;
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
      
    }
    h3 {
      margin-top: 0.5rem;
      font-size: 1rem;
      color: #333;
      margin-bottom: 2rem;
    }
  }
.ihm-projet-title{
   background-color:#E8A849;
   font-size: 1.5rem;
  font-weight: bolder;
  color: #fff;
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
}
.iconeBack{
    cursor: pointer;
}

</style>