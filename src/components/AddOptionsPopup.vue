<template>
  <div
    class="absolute left-[40%] top-28 z-50 m-auto flex h-60 w-60 flex-col items-center border-2 border-black bg-red-500"
  >
    <form action="" class="flex flex-col items-center gap-2">
      <label for="room-number">Room number</label>
      <input type="text" id="room-number" /> <br />

      <label for="isOccupied">is ocuppied?</label>
      <input type="text" id="isOccupied" placeholder=" true or false" /> <br />
      <input type="button" value="Submit" class="border border-black px-2 py-1" @click="addRoom" />
    </form>
  </div>
</template>

<script setup>
// Firebase
import { collection, addDoc } from 'firebase/firestore'
import { db, auth } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'

let currentUser = null

onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser = user.uid
    // ...
  } else {
    // User is signed out
  }
})

// Add room to the collection
function addRoom() {
  const isOccupiedInput = document.querySelector('#isOccupied')
  const roomNumber = document.querySelector('#room-number')

  addDoc(collection(db, currentUser), {
    isOccupied: isOccupiedInput.value,
    roomNumber: roomNumber.value
  })
}
</script>
