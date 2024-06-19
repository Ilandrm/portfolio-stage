<script setup>
import {defineProps} from 'vue'
import { useProjectStore } from '../store/projectStore.js'
import {storeToRefs} from 'pinia'
import {ref} from 'vue'
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
        <p class="response">Petitbach est un site d'apprentissage ludo-éducatif. Il est à disposition des professeurs et des élèves
            afin d'enseigner et d'apprendre la musique sous une autre forme.
</p>
        <hr class="mt-2">

        <h1 class="realisation-projet-title">Réalisation</h1>
        <hr class="mb-3">
        <div class="image-container">
          <a href ="https://gricad-gitlab.univ-grenoble-alpes.fr/iut2-info-stud/2024-s4/sae-4a/team_02/carnet_stage_serveur_23_24">
            <img class="logoApp" src="../assets/petitbach.png"></a>
        </div>
        <div class="section">
          <p class="section-title" style="color: #535bf2;">Environnement Technique :</p>
          <ul class="project-tools">
            <li class="tool-item">
              <img src="../assets/symfony.png">
              <h3>Symfony</h3>
            </li>
            <li class="tool-item">
              <img src="../assets/JavaScript-logo.png">
              <h3>Js</h3>
            </li>
            <li class="tool-item">
              <img src="../assets/pixijs-logo-full-light.png">
              <h3>Pixi-Js</h3>
            </li>
          </ul>
        </div>
        <div class="detail-item">
          <p class="title" style="color: #535bf2;">Description :</p>
          <p class="response">Application d'apprentissage de la musique</p>
        </div>
        <hr class="mt-2">
        <h1 class="ihm-projet-title">IHM</h1>
        <hr class="mb-3">
        <div class="d-flex justify-content-around">
            <img class="logoPhoto" src="../assets/petitbach1.png" @click="dialogTableVisible = true">
            <el-dialog  v-model="dialogTableVisible"  width="fit-content">
            <div class="d-flex justify-content-around">
            <img src="../assets/petitbach1.png" class="phtoCapt ">
                
            <img src="../assets/petitbach2.png" class="phtoCapt">
            </div>
           
            </el-dialog>
</div>
</el-scrollbar>
</template>
<style>
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
.context-projet-title{
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