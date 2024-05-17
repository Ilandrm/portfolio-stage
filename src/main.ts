import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse,faDiagramProject,faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueTyped from 'vue3-typed-js';
library.add(faHouse,faDiagramProject,faAddressBook)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(VueTyped).mount('#app')
