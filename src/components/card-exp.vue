<script setup>
import {ref} from 'vue'
const dialogTableVisible = ref(false)
</script>

<template>
  <el-card class="exp">
    <template #header>
      <div class="header-container">
        <img src="../assets/Koesio-logo.png" alt="logo" class="koesioLogo">
      </div>
    </template>
    <el-scrollbar height="400px">
    <div class="lines">
          <div class="violetLine"></div>
          <div class="redLine"></div>
        </div>

      <div class="content">
        <hr class="mt-2">
        <h1 class="context-title">Contexte</h1>
        <hr class="mb-3">
        <div class="detail-item">
          <p class="title">Thême :</p>
          <p class="response">Développement d'une application d'optimisation de ressource</p>
        </div>
        <div class="detail-item">
          <p class="title">Contexte :</p>
          <p class="response">BUT 2ème année</p>
        </div>
        <div class="detail-item">
          <p class="title">Type d'éxperience :</p>
          <p class="response">Stage</p>
        </div>
        <div class="section">
          <p class="section-title">Outils de gestion de projet :</p>
          <ul class="project-tools">
            <li class="tool-item">
              <img src="../assets/Jira_Logo.svg.png">
              <h3>Jira</h3>
            </li>
            <li class="tool-item">
              <img src="../assets/gitlab-logo-500.png">
              <h3>GitLab</h3>
            </li>
            <li class="tool-item">
              <img src="../assets/clockify-logo.png">
              <h3>Clockify</h3>
            </li>
          </ul>
        </div>
        <hr class="mt-2">
        <h1 class="realisation-title">Réalisation</h1>
        <hr class="mb-3">
        <div class="image-container">
          <img class="logoApp" src="../assets/image.png">
        </div>
        <div class="section">
          <p class="section-title" style="color: #EB5C6C;">Environnement Technique :</p>
          <ul class="project-tools">
            <li class="tool-item">
              <img src="../assets/Vue.js_Logo_2.svg.png">
              <h3>Vue</h3>
            </li>
            <li class="tool-item">
              <img src="../assets/Laravel-Logo.wine.png">
              <h3>Laravel</h3>
            </li>
            <li class="tool-item">
              <img src="../assets/Docker-Emblem.png">
              <h3>Docker</h3>
            </li>
          </ul>
        </div>
        <div class="detail-item">
          <p class="title" style="color: #EB5C6C;">Description :</p>
          <p class="response">Outil de planification de projet</p>
        </div>
        <hr class="mt-2">
        <h1 class="ihm-title">IHM</h1>
        <hr class="mb-3">
        <div class="d-flex justify-content-around">
            <img class="logoPhoto" src="../assets/photo1.png" @click="dialogTableVisible = true">
            <el-dialog  v-model="dialogTableVisible"  width="fit-content">
            <div class="d-flex justify-content-around">
            <img src="../assets/Image2.jpg" class="phtoCapt ">
                
            <img src="../assets/Image3.jpg" class="phtoCapt">
            </div>
            <div class="d-flex justify-content-around">
            <img src="../assets/Image4.jpg" class="phtoCapt">
            <img src="../assets/photo1.png" class="phtoCapt">
            </div>    
            </el-dialog>
</div>
        <div class="lines">
          <div class="violetLine"></div>
          <div class="redLine"></div>
        </div>
        
      </div>
    </el-scrollbar>
  </el-card>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
.phtoCapt{
    width: 30rem;
    padding: 20px;
    transition: transform 0.3s ease-in-out;
    &:hover{
        transform: scale(1.2);
    }
}
.ihm-title{
    font-size: 1.5rem;
  font-weight: bolder;
  color: #fff;
  background-color: #6e398e;
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
}
.logoPhoto{
width: 15rem;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.973);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  border-radius: 10px;
  border: solid 2px white;
  &:hover{
    color: #ccc;
    border: solid 2px #646cff;
    cursor: pointer;
    filter: blur(1px);
  }
}
.exp {
  margin: 3rem auto;
  width: 40rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
}

.header-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-radius: 10px 10px 0 0;
}
.context-title{
    font-size: 1.5rem;
  font-weight: bolder;
  color: #fff;
  background-color: #6e398e;
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
}
.koesioLogo {
  width: 8rem;
  height: auto;
}

.content {
  padding: 1.5rem;
}

.detail-item {
  display: flex;
  margin-bottom: 1rem;
  p.title {
    font-weight: bold;
    color: #6e398e;
    margin-right: 0.5rem;
  }
  p.response {
    color: #333;
  }
}

.section {
  margin-top: 2rem;
  .section-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #6e398e;
    margin-bottom: 1rem;
  }
}

.project-tools {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  margin: 0;
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
}

.realisation-title {
  font-size: 1.5rem;
  font-weight: bolder;
  color: #fff;
  background-color: #EB5C6C;
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
}

.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.logoApp {
  width: 10rem;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
}

.lines {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  .violetLine, .redLine {
    width: 5rem;
    height: 0.5rem;
    border-radius: 5px;
  }
  .violetLine {
    background-color: #6e398e;
  }
  .redLine {
    background-color: #EB5C6C;
  }
}
</style>
