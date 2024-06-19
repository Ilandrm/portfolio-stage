<script setup>
import { ref } from 'vue';
import topbarMenu from '../components/topbar-menu.vue';
import Particles from '../components/particle-vue.vue';
import { loadFull } from "tsparticles";
const form = ref({
  name: '',
  email: '',
  message: ''
});
const particlesInit = async (engine) => {
  await loadFull(engine);
};
const submitForm = () => {
  console.log('Form Submitted', form.value);
};
</script>

<template>
    <Particles style="position: absolute; z-index: 0;"></Particles>
    <div class="content ">
    <topbarMenu/>
    <div class="contact-form">
      <h1>Contactez-moi</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nom</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
</div>
  </template>
  

  
  <style scoped>
  .content{
    position: relative;
  }
  .contact-form {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10rem;
    background-color: #1c1c1c; 
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  
  .contact-form h1 {
    color: #6F46E1; 
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    color: #6F46E1; /* Violet */
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #6F46E1; /* Violet */
    border-radius: 5px;
    background-color: #000000; /* Noir */
    color: #fff;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #8a64e6; /* Un violet plus clair pour le focus */
  }
  
  button {
    background-color: #6F46E1; /* Violet */
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #8a64e6; /* Un violet plus clair pour le hover */
  }
  </style>
  