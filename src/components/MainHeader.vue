<template>
  <header class="w-full">
    <div class="flex w-full justify-end gap-4 px-4 py-2" v-if="isLoggedIn == true">
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
    </div>

    <div class="flex w-full justify-end px-4 py-2" v-if="isLoggedIn == false">
      <ul class="flex w-full items-center justify-end gap-4 px-4 py-2">
        <li class="cursor-pointer">
          <RouterLink
            to="/"
            class="rounded-md bg-gray-100 px-2 py-1 text-lg shadow-sm shadow-black/50 transition-all duration-200 hover:shadow-md"
          >
            Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/login"
            class="rounded-md bg-green-500 px-2 py-1 text-lg shadow-sm shadow-black/50 transition-all duration-200 hover:bg-green-600"
          >
            Sign in</RouterLink
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import AddOptionsPopup from './AddOptionsPopup.vue'
import { ref } from 'vue'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'
import { RouterLink } from 'vue-router'

/* Popup component visibility */

//listen user login status

const isLoggedIn = ref()
onAuthStateChanged(auth, (user) => {
  if (user) {
    isLoggedIn.value = true
  } else {
    isLoggedIn.value = false
  }
})

const showHidePopup = () => {
  const popup = document.querySelector('#popup-menu-add')
  popup.classList.toggle('hidden')
}
const signOutFunc = () => {
  signOut(auth)
}
</script>
