import { defineStore } from 'pinia';

export const useListStore = defineStore('list', {
  state: () => ({
    // item: { id: Math.random(Math.floor * 1000), text: '', isBought: false },
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
      console.log('list', this.listItem);
    }
  }
});
