<script setup>
import { ref } from 'vue';
import { useListStore } from '@/stores/list';
import ShoppingList from './ShoppingList.vue';

const item = ref('');

const store = useListStore();

const { addItem } = store;
</script>
<template>
  <input type="text" v-model="item" placeholder="Enter an shopping item" />
  <button type="button" @click="addItem(item)">Add</button>
  <ShoppingList />
</template>
