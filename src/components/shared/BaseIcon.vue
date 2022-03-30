<script setup lang="ts">
defineProps<{
  iconUrl: string;
}>();
</script>

<template>
  <img :src="iconUrl" class="icon" />
</template>

<style>
.icon {
  max-width: 2rem;
  margin-right: 0.5rem;
  /* max-height: 1rem; */
}
</style>
