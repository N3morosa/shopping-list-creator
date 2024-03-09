<script setup>
import { useListStore } from '@/stores/list';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
const store = useListStore();

let { shoppingList } = storeToRefs(store);
const { removeItem, saveExistingList } = store;
onMounted(() => {
  saveExistingList();
});
</script>
<template>
  <p>{{ shoppingList }}</p>
  <ul>
    <li v-for="item in shoppingList" :key="item.id">
      {{ item.text }} #{{ item.category }}
      <button type="button" @click="removeItem(item.id)">-</button>
    </li>
  </ul>
</template>
