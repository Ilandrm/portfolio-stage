<script setup>
import topbarMenu from '../components/topbar-menu.vue';
import { onMounted,ref} from 'vue';
import Swup from 'swup'
import Particles from '../components/particle-vue.vue';
import { loadFull } from "tsparticles";
let show = ref(true)
let styleBtn = ref(null)
let typedStrings = ref(["Bienvenue sur mon portfolio"])
let makeStyleBtn = () => {
   for(let i = 0 ; i <=100;i++){
      styleBtn.value = "opacity:"+i+";"
   }
}

const particlesInit = async (engine) => {
  await loadFull(engine);
};
onMounted(()=>{
   makeStyleBtn()

})
</script>
<template>
  <Particles style="position: absolute; z-index: 0;"></Particles>
  <div class="content">
   <topbarMenu/>
   
   <main >
      <VueTyped
         :strings="typedStrings"
         :typeSpeed="50"
         :loop="false" style="font-size: 70px;font-weight:bolder;display: flex; justify-content: space-around; margin-top: 11rem; "></VueTyped>   
      <div class="d-flex flex-row" style="justify-content: space-around; ">   
      <button class="btn btn-outline-primary enter" :style="styleBtn" @click="()=>{show = !show}"><RouterLink to="/home">Entrez</RouterLink> </button>   
      </div>   
      <img class="iconBook" src="../assets/2998089-livre-ouvert-un-croquis-d-un-dessin-d-un-livre-avec-des-lettres-volantes-vectoriel-removebg-preview.png">
      <div class="d-flex justify-content-around mt-4">
      <el-card class="cardBook">
         <p>Salut , je suis Ilan Darmon, un passionné d'informatique et étudiant dans ce domaine fascinant.</p>
          <p>Ce portfolio vous offre un aperçu détaillé de mes compétences, </p>
          <p>de mon parcours académique ainsi que des projets informatiques auxquels j'ai participé.</p>
          <p>Si vous cherchez à collaborer sur un projet ou à discuter de nouvelles opportunités, </p>
            <p>n'hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles expériences.</p>
          <p>Vous trouverez ici une sélection de mes réalisations </p>
          <p id="lastline">Je vous souhaite une agréable visite et j'espère que mes réalisations sauront captiver votre intérêt !</p>
      </el-card>
   </div>
   </main>
</div>
</template>
<style scoped>
.enter{
   width: 15rem;
   height: 3rem;
   margin-top: 3rem;
   border-color:#6F46E1;
   color: #6F46E1;
   animation-duration: 2s;
   animation-name: apparition;
}
.iconBook{
   width: 10rem;
   position: absolute;
   margin-left: 20rem;
   margin-top: 6rem;
   animation-duration: 2s;
   animation-name: apparition;
}
.content{
position: relative;}
@keyframes apparition {
   from{
      opacity: 0;
   }
   to{
      opacity: 100;
   }
}
.cardBook{
   width: fit-content;
   color: white;
   font-weight: bold;
   background-color: #6F46E1;
   border: #6F46E1;
   border-radius: 10PX;
   animation-duration: 3s;
   animation-name: apparition;
}
a{
   color: #6F46E1;
   text-decoration: none;
   padding-left: 5em;
   padding-right: 5rem;
}
.enter:hover a {
   color: white;
}
.enter:hover{
   background-color: #6F46E1;
   border-color:#6F46E1;
} 
.transition-fade {
  transition: 0.4s;
  opacity: 1;
}

html.is-animating .transition-fade {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
