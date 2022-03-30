<script setup lang="ts"></script>

<template>
  <div class="card m-2">
    <div class="card-header"><slot name="header" /></div>
    <div class="card-body">
      <!-- <h5 class="card-title"></h5> -->
      <slot name="content" />
    </div>
  </div>
</template>

<style>
.card-header {
  display: flex;
  align-items: center;
  font-weight: bold;
 
}
</style>
