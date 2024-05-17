<script setup>
import topbarMenu from '../components/topbar-menu.vue';
import { onMounted,ref} from 'vue';

let typedStrings = ref(["Bienvenue sur mon portfolio"])
onMounted(()=>{

})
</script>
<template>
     <div class="animated-background">

   <topbarMenu/>
   <main>
      <VueTyped
         :strings="typedStrings"
         :typeSpeed="50"
         :loop="false" style="font-size: 70px;font-weight:bolder;display: flex; justify-content: space-around; margin-top: 11rem; "></VueTyped>   
      <div class="d-flex flex-row" style="justify-content: space-around; ">   
      <button class="btn btn-outline-primary enter">Entrez</button>   
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
}
.enter:hover{
   background-color: #6F46E1;
   border-color:#6F46E1;
} 
</style>
