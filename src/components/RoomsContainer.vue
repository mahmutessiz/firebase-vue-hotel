<template>
  <div class="w-full bg-green-300 px-2 py-4">
    <ul class="flex w-full flex-wrap gap-4">
      <li
        v-for="room in rooms"
        :key="room"
        class="relative grid h-60 w-60 place-items-center border-2"
      >
        <div class="absolute h-full w-full bg-slate-500/50" v-if="room.isOccupied == 'true'"></div>
        <div class="absolute h-full w-full bg-blue-500/50" v-if="room.isOccupied == 'false'"></div>
        {{ room.roomNumber }} <br />
        {{ room.isOccupied }} <br />
        {{ room.roomId }} <br />
        <button
          id="delete-button"
          class="z-10 cursor-pointer rounded-md bg-red-500 px-2 py-1 text-white shadow-md"
          @click="() => deleteRoom(userUid, room.roomId)"
        >
          deleteRoom
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Firebase imports
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db, auth } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'

// !Get room information from the server
let rooms = ref([])
let userUid = ref('')

//Order room by room numbers
function sortByRoomNumber(arr) {
  return arr.sort((a, b) => a.roomNumber - b.roomNumber)
}

/**
 * !listen user login status
 */
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const roomRef = collection(db, user.uid)
    onSnapshot(roomRef, (snapshot) => {
      rooms.value = []
      snapshot.forEach((doc) => {
        rooms.value.push({
          roomId: doc.id,
          isOccupied: doc.data().isOccupied,
          roomNumber: doc.data().roomNumber
        })
      })
      rooms.value = sortByRoomNumber(rooms.value)
    })
    userUid.value = user.uid
  } else {
    rooms.value = []
    console.log('user signed out')
  }
})

/**
 * !Delete room function
 */
const deleteRoom = async (userId, roomId) => {
  try {
    await deleteDoc(doc(db, userId, roomId))
  } catch (err) {
    console.error(err)
  }
}
</script>
