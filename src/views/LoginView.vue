<template>
  <div class="grid min-h-screen w-full place-content-center">
    <form action="" class="flex flex-col gap-2">
      <label for="email">e-mail</label>
      <input
        type="email"
        id="email"
        class="rounded-md border border-black px-2 shadow-sm shadow-black/20"
      />
      <label for="password">password</label>
      <input
        type="password"
        id="password"
        class="rounded-md border border-black px-2 shadow-sm shadow-black/20"
      />
      <button class="rounded-md bg-gray-600 px-2 py-1 text-white hover:bg-slate-700" @click="logIn">
        sign in
      </button>
    </form>
  </div>
</template>

<script setup>
/**
 * !Firebase
 */
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'

import { db, auth } from '@/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const email = document.querySelector('#email')
const password = document.querySelector('#password')

const logIn = (e) => {
  // Create a new user
  e.preventDefault()

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
    })
    .catch((error) => {
      console.log(error.code, error.message)
    })
}
</script>
