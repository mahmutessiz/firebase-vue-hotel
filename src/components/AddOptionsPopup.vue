<template>
  <div class="fixed inset-0 z-50 grid place-content-center">
    <div
      class="absolute inset-0 z-[49] grid place-content-center bg-red-900/30"
      id="close-popup-layer"
      @click="showHidePopup"
    ></div>
    <div
      class="w-68 z-50 m-auto flex flex-col items-center rounded-md border-2 border-black bg-red-500 px-6 py-4"
    >
      <form action="" class="z-50 flex flex-col items-center gap-2">
        <label for="room-number">Room number</label>
        <input type="text" id="room-number" /> <br />

        <label for="isOccupied">is ocuppied?</label>
        <input type="text" id="isOccupied" placeholder=" true or false" /> <br />
        <input
          type="button"
          value="Submit"
          class="border border-black px-2 py-1"
          @click="addRoom"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
// Firebase
import { collection, addDoc } from 'firebase/firestore'
import { db, auth } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'

let currentUser = null

// Popup visibility status
const showHidePopup = () => {
  const popup = document.querySelector('#popup-menu-add')
  popup.classList.toggle('hidden')
}

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
