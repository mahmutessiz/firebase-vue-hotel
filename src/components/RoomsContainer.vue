<template>
  <div class="w-full bg-green-300 px-2 py-4">
    <ul class="flex w-full flex-wrap gap-4">
      <li
        v-for="room in rooms"
        :key="room"
        class="relative grid h-60 w-60 place-items-center border-2"
      >
        <div class="absolute h-full w-full bg-slate-500/50" v-if="room.isOccupied == 'true'"></div>
        {{ room.roomNumber }} <br />
        {{ room.isOccupied }} <br />
        {{ room.roomId }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

/**
 * !Firebase
 */
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'

let rooms = ref([])

/**
 * ? Order room by room numbers
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
</script>
