<template>
    <div class="timeline">
      <TimelineItem
        v-for="(event, index) in events"
        :key="index"
        :date="event.date"
        :title="event.title"
        :description="event.description"
      />
    </div>
  </template>
  
  <script setup>
  import TimelineItem from './TimelineItem.vue';
  import { defineProps } from 'vue';
  
  const props = defineProps({
    events: {
      type: Array,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .timeline {
    background-color: white;
    position: relative;
    margin: 20px 0;
    padding: 0;
    list-style: none;
  }
  
  .timeline:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #6F46E1;
    margin-left: -2px;
  }
  </style>
  