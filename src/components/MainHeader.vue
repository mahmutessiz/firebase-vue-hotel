<template>
  <header class="w-full">
    <div class="flex w-full justify-end gap-4 border-b px-4 py-2" v-if="isLoggedIn == true">
      <button
        class="h-fit w-fit rounded-full hover:shadow-lg hover:shadow-black/50"
        title="add room"
        @click="showHidePopup"
      >
        <img src="../assets/addIcon.svg" alt="add button" />
      </button>
      <AddOptionsPopup id="popup-menu-add" class="hidden" />

      <ul class="flex w-full items-center justify-end gap-4 px-4 py-2">
        <li class="rounded-md px-2 py-1 text-lg transition-all duration-200 hover:shadow-md">
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <button
            class="rounded-md bg-rose-500 px-2 py-1 hover:shadow-sm hover:shadow-black/50"
            @click="signOutFunc"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>

    <div class="flex w-full justify-end border-b px-4 py-2" v-if="isLoggedIn == false">
      <ul class="flex w-full items-center justify-end gap-4 px-4 py-2">
        <li class="cursor-pointer">
          <RouterLink
            to="/"
            class="rounded-md px-2 py-1 text-lg transition-all duration-200 hover:shadow-md"
          >
            Home</RouterLink
          >
        </li>
        <li class="rounded-md px-2 py-1 text-lg transition-all duration-200 hover:shadow-md">
          <RouterLink to="/signup">Sign up</RouterLink>
        </li>
        <li>
          <RouterLink
            to="/login"
            class="mt-4 rounded-md bg-orange-400 px-4 py-2 text-lg hover:shadow-md hover:shadow-black/50"
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
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'
import { RouterLink } from 'vue-router'

// Composable
import { useAuthState } from '@/composables/authState'

// Listen user login status --> authState.js
const { isLoggedIn } = useAuthState()

// Popup visibility status
const showHidePopup = () => {
  const popup = document.querySelector('#popup-menu-add')
  popup.classList.toggle('hidden')
}
const signOutFunc = () => {
  signOut(auth)
}
</script>
