<template>
  <header class="flex w-full justify-end gap-4 px-4 py-2">
    <button
      class="h-fit w-fit rounded-full hover:shadow-lg hover:shadow-black/50"
      title="add room"
      @click="showHidePopup"
    >
      <img src="../assets/addIcon.svg" alt="add button" />
    </button>
    <AddOptionsPopup id="popup-menu-add" class="hidden" />

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

import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'

/* Popup component visibility */

const showHidePopup = () => {
  const popup = document.querySelector('#popup-menu-add')
  popup.classList.toggle('hidden')
}
const signOutFunc = () => {
  signOut(auth)
}
</script>
