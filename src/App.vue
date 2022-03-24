<script setup lang="ts">
import { RouterView } from "vue-router";
import { useLoaderStore } from "@/stores/loader.store";
import TheLoader from "./components/shared/TheLoader.vue";

const loaderStore = useLoaderStore();
</script>

<template>
  <header>
    <!-- <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    /> -->
    <!--

    <div class="wrapper">
      <HelloWorld msg="You did it!" /> -->

    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    <!-- </div> -->
  </header>

  <TheLoader v-if="loaderStore.ongoingBlockingRequests > 0" />

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
