import { defineStore } from 'pinia';

export const useListStore = defineStore('list', {
  state: () => ({
    shoppingList: []
  }),
  getters: {},
  actions: {
    addItem(text, category) {
      if (!text || !category) {
        return;
      }
      this.shoppingList.push({
        id: Math.random(Math.floor() * 10000),
        text,
        isBought: false,
        category
      });
      this.addItemToLocalStorage(this.shoppingList);
    },
    removeItem(id) {
      this.shoppingList = this.shoppingList.filter((item) => id !== item.id);
      this.addItemToLocalStorage(this.shoppingList);
    },
    addItemToLocalStorage(item) {
      localStorage.setItem('shoppingList', JSON.stringify(item));
    },
    saveExistingList() {
      console.log('jhfjshdfgj');
      const savedList = JSON.parse(localStorage.getItem('shoppingList'));
      console.log(savedList);
      if (savedList) {
        this.shoppingList = [...savedList];
      }
    }
  }
});
