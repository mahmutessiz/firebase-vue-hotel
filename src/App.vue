<template>
  <div>
    <header class="flex w-full justify-center">
      <MainHeader />
    </header>
    <RouterView />
  </div>
</template>

<script setup>
import MainHeader from './components/MainHeader.vue'
import { RouterView } from 'vue-router'
</script>
