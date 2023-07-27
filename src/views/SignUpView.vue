<template>
  <div class="grid min-h-screen w-full place-content-center">
    <form action="" class="flex flex-col gap-2" @submit="signIn" id="form">
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
        sign up
      </button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
/**
 * !Firebase
 */
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '@/firebase'

const router = useRouter()

const signIn = (e) => {
  // Create a new user
  e.preventDefault()
  const form = document.querySelector('#form')
  let email = form['email'].value
  let password = form['password'].value
  console.log(email, password)

  // Create the user in Firebase Auth
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (user) => {
      console.log('User created:', user, user.user.uid)
      let userId = user.user.uid
      // Create a document in the users collection

      await setDoc(doc(db, userId, 'deneme'), {
        name: user.user.displayName,
        email: user.user.email,
        createdAt: new Date(),
        roomNumber: '3099'
      }).then(() => {
        router.push('/')
      })
    })
    .catch((error) => {
      console.log('Error creating user:', error)
    })
}
</script>
