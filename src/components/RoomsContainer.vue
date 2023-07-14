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
          class="cursor-pointer rounded-md bg-red-500 px-2 py-1 text-white shadow-md"
          @click="() => deleteRoom(room.roomId)"
        >
          deleteRoom
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

/**
 * !Firebase
 */
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'

let rooms = ref([])
/**
 * Order room by room numbers
 */
function sortByRoomNumber(arr) {
  return arr.sort((a, b) => a.roomNumber - b.roomNumber)
}

onMounted(async () => {
  const roomSnapshot = await getDocs(collection(db, 'rooms'))
  roomSnapshot.forEach((doc) => {
    rooms.value.push({
      roomId: doc.id,
      isOccupied: doc.data().isOccupied,
      roomNumber: doc.data()['room number']
    })
  })
  rooms.value = sortByRoomNumber(rooms.value)
})

/* const deleteRoom = async () => {
  const deleteButton = document.querySelector('#delete-button')
  console.log(deleteButton.parentElement.innerText)
   await deleteDoc(doc(db, 'rooms', 'v9tiAXr0UwNspva5prRP'), err => {console.log(err);})
}
 */
const deleteRoom = async (roomId) => {
  try {
    await deleteDoc(doc(db, 'rooms', roomId))
  } catch (err) {
    console.error(err)
  }
}
</script>
