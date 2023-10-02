<template>
  <div class="m-auto w-full max-w-[1440px]">
    <section class="relative max-h-[100vh] w-full overflow-hidden lg:h-[80vh]">
      <div class="flex h-full w-full flex-wrap items-center justify-center gap-4 p-4">
        <p
          class="rounded-md bg-black/70 p-4 text-center font-mono text-3xl font-bold text-white sm:w-[70%] sm:text-5xl md:text-6xl"
        >
          Not The Best Hotel Management System
        </p>
        <div class="bg-black">
          <!--  <img
            src="https://th.bing.com/th/id/R.2168877d32fdd550a3e3187b918daee6?rik=4y1c4YqIxumGsg&pid=ImgRaw&r=0"
            class="absolute inset-0 -z-10 m-auto h-full w-full object-cover"
            alt=""
          /> -->
        </div>
      </div>
    </section>
    <section class="fade-in mt-12">
      <div class="mt-4 flex flex-wrap-reverse items-center justify-center gap-4 p-4">
        <p class="px-4 md:w-[40%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ut laudantium
          suscipit tempore inventore accusantium qui ullam tenetur ab, adipisci omnis fuga quis quae
          sint repudiandae. Qui iure cum quidem?
        </p>
        <img
          src="https://th.bing.com/th/id/OIP.U16dXVXFDPhpbTMd03hbUgHaE8?pid=ImgDet&rs=1"
          alt=""
        />
      </div>
    </section>
    <section class="fade-in mt-12 border-t">
      <div class="mt-4 flex flex-wrap items-center justify-center gap-4 p-4">
        <img
          src="https://th.bing.com/th/id/OIP.U16dXVXFDPhpbTMd03hbUgHaE8?pid=ImgDet&rs=1"
          alt=""
          class=""
        />
        <p class="px-4 md:w-[40%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ut laudantium
          suscipit tempore inventore accusantium qui ullam tenetur ab, adipisci omnis fuga quis quae
          sint repudiandae. Qui iure cum quidem?
        </p>
      </div>
    </section>
    <section class="fade-in mt-12 border-t">
      <div class="mt-4 flex flex-wrap-reverse items-center justify-center gap-4 p-4">
        <p class="px-4 md:w-[40%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ut laudantium
          suscipit tempore inventore accusantium qui ullam tenetur ab, adipisci omnis fuga quis quae
          sint repudiandae. Qui iure cum quidem?
        </p>
        <img
          src="https://th.bing.com/th/id/OIP.U16dXVXFDPhpbTMd03hbUgHaE8?pid=ImgDet&rs=1"
          alt=""
        />
      </div>
    </section>
    <section class="fade-in my-12 grid w-full place-items-center">
      <div class="grid w-[90%] place-items-center rounded-md border p-4 md:w-[70%]">
        <p class="w-[70%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor tempora praesentium
          repudiandae ullam, facilis ipsum consequatur non velit veritatis aliquam illum mollitia
          commodi deserunt, necessitatibus sunt modi, tempore autem nihil.
        </p>
        <RouterLink
          to="/signup"
          class="mt-4 rounded-md bg-orange-400 px-4 py-2 hover:shadow-md hover:shadow-black/50"
        >
          Join us
        </RouterLink>
      </div>
    </section>
    <footer
      class="flex flex-wrap items-center justify-center gap-4 border-t py-8 backdrop-blur-[2px]"
    >
      <div class="cursor-pointer transition-all duration-300 hover:text-blue-900">Home</div>
      <div class="cursor-pointer transition-all duration-300 hover:text-blue-900">About</div>
      <RouterLink
        to="/pricing"
        class="cursor-pointer transition-all duration-300 hover:text-blue-900"
        >Pricing</RouterLink
      >
      <div class="cursor-pointer transition-all duration-300 hover:text-blue-900">Contact</div>
      <p class="flex w-full justify-center">&copy; 2023 All Rights Reserved</p>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import useIntersectionObserver from '../composables/intersectionObserver'

// Fade in animation from composable for sections
useIntersectionObserver()
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transition: opacity 1s ease-out;
}

.fade-in.show {
  opacity: 1;
}
</style>
