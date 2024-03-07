<script setup>
import { ref } from 'vue';
import { useListStore } from '@/stores/list';
import { storeToRefs } from 'pinia';

const item = ref('');

const store = useListStore();
const { listItem } = storeToRefs(store);
const { addItem } = store;
</script>
<template>
  <form>
    <input type="text" v-model="item" placeholder="Write an shopping item" />
    <button type="button" @click="() => addItem(item)">Add</button>
  </form>
  <ul>
    <li v-for="item in listItem" :key="item.id">{{ item.text }}</li>
  </ul>
</template>
