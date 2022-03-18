<script setup lang="ts"></script>

<template>
  <div class="card m-2">
    <div class="card-body">
      <h5 class="card-title"><slot name="header" /></h5>
      <slot name="content" />
    </div>
  </div>
</template>

<style></style>
