import { defineStore } from 'pinia';

export const useListStore = defineStore('list', {
  state: () => ({
    listItem: []
  }),
  actions: {
    addItem(text) {
      if (!text) {
        return;
      }
      this.listItem.push({
        id: Math.random(Math.floor() * 10000),
        text,
        isBought: false
      });
    },
    removeItem(id) {
      this.listItem = this.listItem.filter((item) => id !== item.id);
    }
  }
});
