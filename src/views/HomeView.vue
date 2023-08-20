<template>
  <div v-if="isLoggedIn == true">
    <RoomsContainer />
  </div>
  <div v-if="isLoggedIn == false">
    <WelcomePageNotLoggedIn />
  </div>
</template>

<script setup>
import WelcomePageNotLoggedIn from '../components/WelcomePageNotLoggedIn.vue'
import RoomsContainer from '../components/RoomsContainer.vue'

import { ref } from 'vue'

// Firebase imports
import { auth } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'

// Listen user login status
const isLoggedIn = ref()

onAuthStateChanged(auth, async (user) => {
  if (user) {
    isLoggedIn.value = true
  } else {
    isLoggedIn.value = false
  }
})
</script>
