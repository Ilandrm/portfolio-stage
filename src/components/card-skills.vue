<script setup>

</script>
<template>
    <el-card class="skills">
      <hr class="mt-2">
        <h1 class="projets-title">Compétences</h1>
        <hr class="mb-3">
        <el-scrollbar height="28rem">
        <div class="d-flex justify-content-around">
        <p class="fronttext">Front-end</p>
      </div>
      <div class="d-flex">
      <p class="subTit">Technologie</p>
      <div class="blueLine"></div>
      </div>
      <ul class="listIcon d-flex">
         <li><img src="../assets/HTML5_logo_and_wordmark.svg.png"></li>
         <li><img src="../assets/css-3.svg"></li>
         <li><img src="../assets/JavaScript-logo.png"></li>
         <li><img src="../assets/Vue.js_Logo_2.svg.png"></li>
         <li><img src="../assets/pixijs-logo-full-light.png"></li>
         <li><img src="../assets/xml.svg"></li>
         <li><img src="../assets/440px-JavaFX_Logo.png"></li>
      </ul>
      <div class="d-flex">
         <div class="blueLine"></div>
      <p class="subTit ms-2">Outils</p>
   </div>

      <ul class="listIcon d-flex">
      <li><img src="../assets/Android_Studio_icon_(2023).svg.png"></li>
      <li><img src="../assets/code-stable.png"></li>
         <li><img src="../assets/elemPlus.png"></li>
         <li><img src="../assets/Bootstrap_logo.svg.png"></li>
         </ul>
   
   <div class="d-flex justify-content-around">
      <p class="backText mt-4">Back-end</p>
   </div>
   <div class="d-flex">
      <p class="subTitB">Technologie</p>
      <div class="redLineback"></div>
      </div>
      <ul class="listIcon ">
         <div class="d-flex">
         <li><img src="../assets/PHP-logo.svg.png"></li>
         <li><img src="../assets/symfony.png"></li>
         <li><img src="../assets/Laravel-Logo.wine.png"></li>
         <li><img src="../assets/java.png"/></li>
         <li><img src="../assets/ISO_C++_Logo.svg.png"></li>
         <li><img src="../assets/Docker-Emblem.png"></li>
         <li><img src="../assets/sql-65abb94c4195c573530652.png"></li>
         
      </div>
      <div class="d-flex">
         <li><img src="../assets/Python-logo-notext.svg.png"></li>
         <li><img src="../assets/node.png"></li>
      </div>
      </ul>
      
      <div class="d-flex">
         <div class="redLineback"></div>
      <p class="subTitB ms-2">Outils</p>
   </div>

      <ul class="listIcon d-flex">
      <li><img src="../assets/eloquent.png"></li>
      <li><img src="../assets/postgresq.png"></li>
         <li><img src="../assets/IntelliJ_IDEA_Icon.svg.png"></li>
         <li><img src="../assets/PhpStorm_Icon.png"></li>
         <li><img src="../assets/PyCharm_Icon.svg.png"></li>
         </ul>
      </el-scrollbar>
</el-card>
</template>
<style lang="scss">
.skills{
   margin-top: 5rem;
   width: 40rem;
   height: 35rem;   
}
.backText{
   font-weight: bold;
   font-size: 20px;
   color: #c46032;
}
.listIcon{
   li{
      img{
         width: 3rem;
         margin-right: 2rem;
      }
   }
}
.fronttext{
   font-weight: bold;
   font-size: 20px;
   color: #2c0d83;
}
.subTit{
   font-weight: bold;
   margin-right: 10px;
   color: #2c0d83;
}
.subTitB{
   font-weight: bold;
   margin-right: 10px;
   color: #c46032;
}
.redLineback{
   background-color:#c46032 ;
   width: 100%;
   border-radius: 5px;
   height: 1rem;
   margin-top: 3px
}
.blueLine{
   background-color:#2c0d83 ;
   width: 100%;
   border-radius: 5px;
   height: 1rem;
   margin-top: 3px
}
</style>