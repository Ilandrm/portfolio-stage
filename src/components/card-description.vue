<script setup>

</script>
<template>
 <el-card class="description">
            <template #header>
               <div class="d-flex">
              <img src="../assets//pp.jpg" class="pp">
               <div class="d-flex flex-column">
                  <h1 class="titlename">Ilan Darmon</h1>
                  <ul>
                     <li><el-tag size="large" type="primary">Developpeur full stack</el-tag><el-tag type="primary" size="large">Developpeur web</el-tag> </li>
                     <li><el-tag size="large" type="warning" style="margin-left:0.5rem;">Curieux</el-tag><el-tag type="warning" size="large">Autonome</el-tag><el-tag type="warning" size="large">Motivée</el-tag> </li>
                     <li class="d-flex" style="justify-content: space-around	;margin-top: 2rem;"><font-awesome-icon :icon="['fas', 'camera']" />
                        <font-awesome-icon :icon="['fas', 'coffee']" />
                        <font-awesome-icon :icon="['fas', 'computer']" />
                        <font-awesome-icon :icon="['fas', 'martini-glass-citrus']" />                 
                        <font-awesome-icon :icon="['fas', 'headphones']" />
                     </li>
                  </ul>
               </div>
            </div>       
            </template>
               <div class="d-flex"><p class="titlePartsBody">Qui-suis-je professionellement ? </p> <p class="responseTextBody">Je suis étudiant en BUT informatique à Grenoble, Stagiaire et futur alternant de Koesio. </p></div>
            <div class="d-flex"><p class="titlePartsBody">Qui-suis-je personellment?  </p> <p class="responseTextBody">Je suis quelqun d'engagé et j'aime aller au bout des choses. Je suis curieux et dynamique, j'aime creer mener à bien les projets auquels je participe. Il peut m'arriver d'être distrait et "tête en l'air" mais je me soigne ! </p></div>
            <div class="d-flex"><p class="titlePartsBody">Pour mieux me connaitre...  </p> <p class="responseTextBody">Je suis engagé dans de nombreuses association : Tresorier d'une association culturel et résponsable régional des scouts et chef de camps (encadrement de 80 enfants). J'adore la musique et j'aime me detendre en jouant du piano. </p></div>
         </el-card>
</template>
<style>
.el-tag{
   margin-right: 2rem;
   margin-top: 1rem;
}
.titlename{
    font-weight: bolder;
    font-size: 25px;
    margin-left: 2rem;
    color: #6F46E1;
    margin-top: 1rem;
}
ul{
   list-style-type: none;
}
.nom{
   margin-left: 2rem
}
.el-card .pp {
   width: 10rem;
   border-radius: 10px;
   border:#6F46E1 solid 1px ;
}
.description{
   margin-top: 5rem;
   width: 40rem;
   height: 35rem;
   
}
.responseTextBody{
   margin-left: 12px;
   width: 32rem;
   font-size: 13.5px;
}
.titlePartsBody{
   font-weight: bold;
   width: 10rem;
}
li svg{
   color: #6F46E1;
   margin-top: 1rem;
}
</style>