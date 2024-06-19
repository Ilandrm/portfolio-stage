<template>
    <div class="timeline-item" :class="{'left': isLeft, 'right': !isLeft}">
      <div class="timeline-date">{{ date }}</div>
      <div class="timeline-content">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  
  const props = defineProps({
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  });
  
  const isLeft = computed(() => {
    return props.date % 2 === 0;
  });
  </script>
  
  <style scoped>
  .timeline-item {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    margin: 20px 0;
    width: 100%;
  }
  
  .timeline-item.left {
    justify-content: flex-end;
  }
  
  .timeline-date {
    position: absolute;
    top: 0;
    width: 80px;
    padding: 5px 10px;
    background: #6F46E1;
    color: #fff;
    text-align: center;
    border-radius: 5px;
  }
  
  .timeline-item.left .timeline-date {
    left: calc(50% - 40px);
  }
  
  .timeline-item.right .timeline-date {
    right: calc(50% - 40px);
  }
  
  .timeline-content {
    width: 45%;
    padding: 20px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .timeline-content h2 {
    margin-top: 0;
    color: #6F46E1;
  }
  </style>
  