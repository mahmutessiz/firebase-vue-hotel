// authState.js
import { ref, onUnmounted } from 'vue'
import { auth } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export function useAuthState() {
  const isLoggedIn = ref(false)

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })

  onUnmounted(() => {
    unsubscribe()
  })

  return { isLoggedIn }
}

// Code that was in the component
/* const isLoggedIn = ref()
onAuthStateChanged(auth, (user) => {
  if (user) {
    isLoggedIn.value = true
  } else {
    isLoggedIn.value = false
  }
}) */
