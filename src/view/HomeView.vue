<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/all';
import topbarMenu from '../components/topbar-menu.vue';
import cardDescription from '../components/card-description.vue';
import cardSkills from '../components/card-skills.vue';
import cardForm from '../components/card-form.vue';
import cardExp from '../components/card-exp.vue';
import cardProject from '../components/card-project.vue';
import Particles from '../components/particle-vue.vue';

let styleDropZone = ref(null);
let initialPos = ref({});
let cardList = ref(['skills', 'form', 'description', 'projects', 'exp']);
let activeCard = ref('empty');
let orderCard = ref([]);

const getPos = (element) => {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left,
    y: rect.top
  };
};

const getInitialPos = (cardId) => {
  const element = document.getElementById(cardId);
  if (element) {
    initialPos.value[cardId] = getPos(element);
  }
};

onMounted(() => {
  orderCard.value = cardList.value;
  gsap.registerPlugin(Draggable);
  Draggable.create(".waitCard", {
    dragResistance: 0,
    inertia: false,
    liveSnap: false,
    onDrag: function() {
      styleDropZone.value = "background-color:#b59bff;";
      if (!initialPos.value[this.target.id]) {
        getInitialPos(this.target.id);
      }
    },
    onClick: function() {
      let dropZone = document.getElementById("dropZone");
      let container = document.getElementById("container");

      if (dropZone && container) {
        if (dropZone.children[0] === this.target) {
          container.appendChild(this.target);
          gsap.set(this.target, { x: 0, y: 0 });
          activeCard.value = 'empty'
        }
      }
    },
    onDragEnd: function() {
      styleDropZone.value = "background-color:none;";
      const currentPos = getPos(this.target);
      const initialPosi = initialPos.value[this.target.id];

      if (initialPosi && (initialPosi.x !== currentPos.x || initialPosi.y !== currentPos.y)) {
        let dropZone = document.getElementById("dropZone");

        if (dropZone && this.hitTest(dropZone) && dropZone.children.length === 0) {
          dropZone.style = "width:17rem;height:6rem;";
          this.target.style = "position:relative;";
          dropZone.appendChild(this.target);
          gsap.set(this.target, { x: 0, y: 0 }); 
          activeCard.value = this.target.id;
          orderCard.value = orderCard.value.filter(item => item !== this.target.id);
          orderCard.value.splice(2, 0, this.target.id);
        } else {
         console.log( initialPosi)
         getInitialPos(this.target)
          gsap.to(this.target, {
            x: initialPosi ,
            y: initialPosi,
            duration: 0.5
          });
        }
      }
    }
  });
});
</script>

<template>
  <Particles></Particles>
  <div class="content">
  <topbarMenu />
  <div class="global d-flex">
    <div class="d-flex flex-column" id="container" style="justify-content: space-around;">
      <div class="waitCard" :id="cardList[0]">
        <el-card>
          <h5 class="d-flex waitTitleCard">
            <font-awesome-icon :icon="['fas', 'wrench']" />
            Compétences
          </h5>
        </el-card>
      </div>
      <div class="waitCard" :id="cardList[1]">
        <el-card>
          <h5 class="d-flex waitTitleCard">
            <font-awesome-icon :icon="['fas', 'school']" />
            Formation
          </h5>
        </el-card>
      </div>
      <div class="waitCard" :id="cardList[2]">
        <el-card>
          <h5 class="d-flex waitTitleCard">
            <font-awesome-icon :icon="['fas', 'user']" />
            Description
          </h5>
        </el-card>
      </div>
      <div class="waitCard" :id="cardList[3]">
        <el-card>
          <h5 class="d-flex waitTitleCard">
            <font-awesome-icon :icon="['fas', 'project-diagram']" />
            Projets
          </h5>
        </el-card>
      </div>
      <div class="waitCard" :id="cardList[4]">
        <el-card>
          <h5 class="d-flex waitTitleCard">
            <font-awesome-icon :icon="['fas', 'briefcase']" />
            Experiences
          </h5>
        </el-card>
      </div>
    </div>
    <div class="d-flex flex-column">
      <card-description v-if="activeCard === 'description'"></card-description>
      <card-project v-if="activeCard === 'projects'"></card-project>
      <card-exp v-if="activeCard === 'exp'"></card-exp>
      <card-form v-if="activeCard === 'form'"></card-form>
      <card-skills v-if="activeCard === 'skills'"></card-skills>
      <el-card v-if="activeCard  === 'empty'" class="vide d-flex flex-column justify-content-around ">
        <div class="justify-content-around d-flex">
        <h1>Glissez une carte dans l'encadré en dessous</h1>
        </div>
        <div class="justify-content-around d-flex">
        <img src="../assets/arrow.png" alt="arrow" class="imgArrow">
        </div>
      </el-card>
      <div class="d-flex" style="justify-content: space-around;">
        <div class="dropZone d-flex" id="dropZone" :style="styleDropZone">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.content{
  position: relative;
  z-index: 1;
}

.enter {
  width: 15rem;
  height: 3rem;
  margin-top: 3rem;
  border-color: #6F46E1;
  color: #6F46E1;
  animation-duration: 2s;
  animation-name: apparition;
}
.vide{
   margin-top: 5rem;
   width: 40rem;
   height: 35rem;
   .imgArrow{
    margin-top: 1rem;
    transform:rotate(90deg);
    border:none;
    width: 10rem;
   }
   h1 {
  color: #ccc; 
  font-size: 50px; 
  margin: 0; 
  padding: 0; 
  width: 35rem;
}
    background: rgba(255, 255, 255, 0.41);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);
    border: 1px solid rgba(255, 255, 255, 0.26);
  }
.dropZone {
  border: dashed #5E5E5B 2px;
  margin-top: 2rem;
  width: 15rem;
  height: 5rem;
}
.waitTitleCard {
  justify-content: space-around;
  font-weight: bolder;
}
.waitCard {
  width: 15rem;
  background-color: rgb(240, 240, 240);
  
  .el-card:hover {
  transform: scale(1.1);
}
}
h1 {
  font-weight: bolder;
  font-size: 25px;
  margin-left: 2rem;
  color: #6F46E1;
  margin-top: 1rem;
}
@keyframes apparition {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}
.enter:hover {
  background-color: #6F46E1;
  border-color: #6F46E1;
}
.transition-fade {
  transition: 0.4s;
  opacity: 1;
}
.global {
  justify-content: space-around;
}
</style>
