<template>
  <div class="flex w-full flex-col items-center justify-center bg-green-500 px-2 py-4">
    <ul class="flex flex-wrap items-center justify-center gap-4 p-4">
      <li
        v-for="room in rooms"
        :key="room"
        class="relative flex h-80 w-72 flex-wrap justify-center overflow-hidden rounded-md bg-white shadow-lg shadow-black/40"
      >
        <!-- Dropdon button -->
        <button class="absolute left-[80%] top-2 z-50 cursor-pointer" @click="showHideMenu">
          <img src="../assets/options.svg" alt="options" />
        </button>
        <!-- Options -->
        <div class="flex w-full justify-end">
          <div class="z-40 hidden gap-4 py-12" id="showHideContainer">
            <button
              id="delete-button"
              class="z-10 cursor-pointer"
              @click="() => deleteRoom(userUid, room.roomId)"
            >
              <img src="../assets/thrash.svg" alt="delete room button" title="delete room" />
            </button>

            <button @click="statusPopup(room.roomId)" class="z-40 cursor-pointer">
              <img src="../assets/options.svg" alt="options" />
            </button>
            <!-- Options popup -->
            <div
              class="absolute inset-0 z-50 hidden w-full place-items-center bg-white/90"
              :data-room-id="room.roomId"
              id="status-form-container"
            >
              <form action="" @submit="changeStatus($event, room.roomId)" id="status-form">
                <p>Please select room status:</p>
                <input type="radio" id="true" name="room-status" value="true" />
                <label for="html">Occupied</label><br />
                <input type="radio" id="false" name="room-status" value="false" />
                <label for="css">Not Occupied</label><br />
                <button class="mt-4 rounded-md bg-green-500 px-2 py-1 shadow-sm shadow-black/80">
                  Apply
                </button>
              </form>
            </div>
          </div>
        </div>

        <div class="absolute h-full w-full bg-slate-500/50" v-if="room.isOccupied == 'true'"></div>
        <div class="absolute h-full w-full bg-blue-500/50" v-if="room.isOccupied == 'false'"></div>
        {{ room.roomNumber }} <br />
        {{ room.isOccupied }} <br />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Firebase imports
import { collection, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db, auth } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'

// !Get room information from the server
let rooms = ref([])
let userUid = ref('')

//Order room by room numbers
function sortByRoomNumber(arr) {
  return arr.sort((a, b) => a.roomNumber - b.roomNumber)
}

// listen user login status

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

// Delete room function
const deleteRoom = async (userId, roomId) => {
  try {
    await deleteDoc(doc(db, userId, roomId))
  } catch (err) {
    console.error(err)
  }
}

// Change room status function
const changeStatus = async (e, roomId) => {
  e.preventDefault()
  const form = document.querySelector(`[data-room-id="${roomId}"] #status-form`)
  const roomStatus = form['room-status'].value
  if (roomStatus === '') return // check if value is empty
  try {
    await setDoc(
      doc(db, userUid.value, roomId),
      {
        isOccupied: roomStatus
      },
      { merge: true }
    )
  } catch (err) {
    console.error(err)
  }
}
// Change room statuspopup function
const statusPopup = (roomId) => {
  const formPopup = document.querySelector(`[data-room-id="${roomId}"]`)
  if (formPopup.classList.contains('hidden')) {
    formPopup.classList.remove('hidden')
    formPopup.classList.add('grid')
  } else if (formPopup.classList.contains('grid')) {
    formPopup.classList.remove('grid')
    formPopup.classList.add('hidden')
  }
}

// Show/hide options
const showHideMenu = (event) => {
  const button = event.target
  const dropdownMenu = button.closest('li').querySelector('#showHideContainer')

  if (dropdownMenu.classList.contains('hidden')) {
    dropdownMenu.classList.remove('hidden')
    dropdownMenu.classList.add('flex')
  } else if (dropdownMenu.classList.contains('flex')) {
    dropdownMenu.classList.remove('flex')
    dropdownMenu.classList.add('hidden')
  }
}
</script>
