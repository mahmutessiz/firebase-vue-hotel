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
    <p class="w-[80%]">{{ userData }}</p>
  </div>
</template>

<script setup>
/**
 * !Firebase
 */
/* import {  doc, addDoc } from 'firebase/firestore' */
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db, auth } from '@/firebase'

import { ref } from 'vue'
let userData = ref([])
const logIn = (e) => {
  // Create a new user
  e.preventDefault()
  const form = document.querySelector('#form')
  const email = form['email'].value
  const password = form['password'].value
  console.log(email, password)

  // Create the user in Firebase Auth
  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log('User created:', user, user.uid)
      userData.value.push(user)
      // Create a document in the users collection

      /* addDoc(doc(db, 'hotels', user.uid), {
        name: user.displayName,
        email: user.email,
        createdAt: new Date()
      }) */
      console.log(userData)
    })
    .catch((error) => {
      console.log('Error creating user:', error)
    })
}
</script>
