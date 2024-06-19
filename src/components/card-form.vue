<script setup>
import Timeline from '../components/Timeline.vue';

const events = [
  { date: '2023', title: 'BUT Informatique', description: 'IUT2 de Grenoble, 2022-2025' },
  { date: '2022', title: 'Bac STI2D', description: 'Obtenue avec metion, lycée Pierre Thermier' }
];
</script>
<template>
    <el-card class="skills">
      <hr class="mt-2">
        <h1 class="projets-title">Formation</h1>
        <hr class="mb-3">
        <el-scrollbar height="28rem">
        <Timeline :events="events" />
      </el-scrollbar>
</el-card>
</template>
<style lang="scss">

</style>