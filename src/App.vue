<template>
  <div>
    <header class="flex w-full justify-center">
      <button class="bg-red-500 px-2 py-1" @click="signOutFunc">sign out</button>
    </header>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'
const signOutFunc = () => {
  signOut(auth)
}
</script>
