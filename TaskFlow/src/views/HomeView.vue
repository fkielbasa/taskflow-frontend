<template>
  <main 
    id="Home" 
    class="flex justify-evenly items-center bg-white min-h-screen relative"
  >
    <div class="m-0 max-w-screen-xl flex flex-col items-center">
      <div class="flex flex-col items-center my-8">
        <h1 class="text-4xl font-extrabold text-center min-[400px]:text-5xl md:text-7xl 2xl:text-8xl">
          Streamline Your 
          <span class="text-5xl min-[400px]:text-6xl md:text-7xl 2xl:text-8xl font-extrabold bg-gradient-to-r from-green-500 to-blue  inline-block text-transparent bg-clip-text">
            Success
          </span>
        </h1>
        <h3 class="text-4xl min-[400px]:text-5xl md:text-6xl 2xl:text-7xl font-extrabold">
          with TaskFlow
        </h3>
      </div>
      <p class="text-xl min-[400px]:text-2xl xl:text-3xl  font-bold text-gray-500 text-center">
        Innovate, Collaborate, Succeed. Simplify Your Workflow, Amplify Your Impact!
      </p>
      <div class="flex gap-2 min-[400px]:gap-5 my-10 mx-4 ">
        <button 
          class="bg-blue hover:opacity-90 px-4 py-2 rounded-lg flex gap-x-2 items-center" 
          @click="scrollToSection('About')"
        >
          <img 
            src="@/assets/images/play_icon.svg" 
            alt="play icon" 
            class="size-[20px]"
          />
          <p class=" text-white font-bold text-lg 2xl:text-xl ">
            Why TaskFlow
          </p>
        </button>
        <RouterLink 
          to="/register" 
          class="bg-gray-400 px-4 py-2 rounded-lg flex gap-x-2 items-center group" 
        >
          <p class=" text-white font-bold text-lg 2xl:text-xl ">
            Getting started
          </p>
          <img 
            src="@/assets/images/arrow.svg" 
            alt="arrow icon" 
            class="size-[20px] relative right-1 top-0 group-hover:right-[-5px] transition-all duration-500"
          />
        </RouterLink>
      </div>
        <img 
          src="@/assets/images/arrow_down.svg" 
          alt="Scroll to down" 
          class="animate-bounce bg-blue rounded-[50%] size-[35px] p-1 absolute bottom-5 hover:cursor-pointer"
          @click="scrollToSection('About')"
        >
    </div>
  </main>



</template>
<script setup lang="ts">
import { scrollToSection } from '@/utils/scroll'


</script>
