<template>
  <div>
    <HeaderMain />
    <RoomsContainer />
  </div>
</template>

<script setup>
import HeaderMain from './components/HeaderMain.vue'
import RoomsContainer from './components/RoomsContainer.vue'
/* import { onMounted, ref } from "vue";
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase";

let arr = ref([]);

onMounted(async () => {
  const citySnapshot = await getDocs(collection(db, "deneme"));
  citySnapshot.forEach((doc) => {
    arr.value.push({
      isOcuppied : doc.data().isOcuppied,
      rawData: doc.data()
    });
  });
}); */
</script>
