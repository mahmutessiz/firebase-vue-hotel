<template>
  <div class="w-full">
    <MainHeader />

    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
</script>
