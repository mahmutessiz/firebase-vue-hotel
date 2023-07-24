<template>
  <header class="flex w-full justify-end gap-4 px-4 py-2">
    <ul class="flex w-full items-center justify-end gap-4 px-4 py-2">
      <li class="cursor-pointer text-xl hover:text-blue-500">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="cursor-pointer text-xl hover:text-blue-500">
        <RouterLink to="/signup">signup</RouterLink>
      </li>
      <li class="cursor-pointer text-xl hover:text-blue-500">
        <RouterLink to="/login">signin</RouterLink>
      </li>
      <li>
        <button class="rounded-md bg-rose-500 px-2 py-1 text-xl" @click="signOutFunc">
          sign out
        </button>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'

const signOutFunc = () => {
  signOut(auth)
}
</script>
