<script setup lang="ts">
import { RouterView } from "vue-router";
import { useLoaderStore } from "@/stores/loader.store";
import TheLoader from "./components/shared/TheLoader.vue";

const loaderStore = useLoaderStore();
</script>

<template>
  <div class="app-container">
    <header></header>

    <TheLoader v-if="loaderStore.ongoingBlockingRequests > 0" />

    <div class="route-container">
      <RouterView />
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.route-container {
  background-color: white;
  padding: 1rem 0rem;
  margin: 1rem;
  border-radius: 0.5rem;
  max-width: var(--screen-size-medium);
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .route-container {
    padding: 1.5rem;
    max-width: var(--screen-size-large);
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .route-container {
    padding: 2rem;
    max-width: var(--screen-size-x-large);
  }
}
</style>
