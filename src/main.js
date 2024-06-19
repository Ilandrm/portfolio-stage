import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './style.css'
import router from './router/index'
import App from '../src/App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse,faDiagramProject,faAddressBook,faHeadphones,faComputer, faMartiniGlassCitrus,faCoffee,faCamera,faBriefcase, faSchool, faWrench,faArrowLeft, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueTyped from 'vue3-typed-js';
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(faHouse,faDiagramProject,faAddressBook, faHeadphones , faComputer , faMartiniGlassCitrus,faCoffee,faCamera,faBriefcase,faSchool,faWrench,faGithub,faGitlab,faLinkedin,faArrowLeft,faUser)
const pinia = createPinia()
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(Particles, {
    init: async engine => {
      // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
      await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    }}).use(VueTyped).use(ElementPlus).use(pinia).use(router).mount('#app')
