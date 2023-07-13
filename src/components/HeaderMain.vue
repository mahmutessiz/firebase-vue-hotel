<template>
  <div>
    <header class="flex h-32 w-full items-center justify-center border-2 border-black">
      <button
        class="h-fit w-fit rounded-full hover:shadow-lg hover:shadow-black/50"
        title="add room"
        @click="showHidePopup"
      >
        <img src="../assets/addIcon.svg" alt="add button" />
      </button>
      <AddOptionsPopup id="popup-menu-add" class="hidden" />
    </header>
  </div>
</template>

<script setup>
import AddOptionsPopup from './AddOptionsPopup.vue'

/* Popup component visibility */

const showHidePopup = () => {
  const popup = document.querySelector('#popup-menu-add')
  popup.classList.toggle('hidden')
}
</script>
