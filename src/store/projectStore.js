import { defineStore } from 'pinia';

export const useProjectStore = defineStore('proj', {
  state: () => ({
    stateProject: null
  }),
});