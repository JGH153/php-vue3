<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  name: string;
  searchUrl: string;
}>();

const searchString = ref("");

const search = () => {
  window.open(props.searchUrl + searchString.value, "_blank");
};
</script>

<template>
  <div class="inputs-container">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        :placeholder="name"
        v-model="searchString"
        @keyup.enter="search"
      />
      <button class="btn btn-primary" type="button" @click="search">
        Søk på {{ name }}
      </button>
    </div>
  </div>
</template>

<style>
.inputs-container {
  display: flex;
  flex-direction: column;
}
</style>
