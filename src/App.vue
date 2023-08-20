<template>
  <div>
    <MainHeader />

    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
</script>
