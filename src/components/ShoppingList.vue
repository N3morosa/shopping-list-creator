<script setup>
import { useListStore } from '@/stores/list';
import { storeToRefs } from 'pinia';
const store = useListStore();

const { listItem } = storeToRefs(store);
const { removeItem } = store;
</script>
<template>
  <ul>
    <li v-for="item in listItem" :key="item.id">
      {{ item.text }}
      <button type="button" @click="removeItem(item.id)">-</button>
    </li>
  </ul>
</template>
