<template>
  <div class="grid min-h-screen w-full place-content-center">
    <form action="" class="flex flex-col gap-2" @submit="logIn" id="form">
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
      <button class="rounded-md bg-gray-600 px-2 py-1 text-white hover:bg-slate-700">
        sign in
      </button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
/**
 * !Firebase
 */
/* import {  doc, addDoc } from 'firebase/firestore' */
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'

const router = useRouter()

const logIn = (e) => {
  // Sign in a user
  e.preventDefault()
  const form = document.querySelector('#form')
  const email = form['email'].value
  const password = form['password'].value
  console.log(email, password)

  // Sign in the user in Firebase Auth
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      router.push('/')
    })
    .catch((error) => {
      console.log('Error creating user:', error)
    })
}
</script>
