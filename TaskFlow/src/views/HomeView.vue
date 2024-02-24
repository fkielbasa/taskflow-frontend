<template>
  <main id="Home" class="flex justify-evenly items-center bg-background-home min-h-screen relative">
    <div class="m-0 max-w-screen-xl flex flex-col items-center">
      <div class="flex flex-col items-center my-8">
        <h1 class="text-7xl font-extrabold">
          Streamline Your 
          <span class="text-7xl font-extrabold bg-gradient-to-r from-green-500 to-blue  inline-block text-transparent bg-clip-text">Success</span>
        </h1>
        <h3 class="text-7xl font-extrabold">with TaskFlow</h3>
      </div>
      <p class="text-xl font-semibold text-gray-400">
        Innovate, Collaborate, Succeed. Simplify Your Workflow, Amplify Your Impact!
      </p>
      <div class="flex gap-5 my-10">
        <button class="bg-blue px-4 py-2 rounded-lg flex gap-x-2 items-center" >
          <img src="@/assets/images/play_icon.svg" alt="play icon" class="size-[20px]">
          <p class=" text-white font-bold">Why TaskFlow</p>
        </button>
        <button class="bg-gray-400 px-4 py-2 rounded-lg flex gap-x-2 items-center" >
          <p class=" text-white font-bold">Get started</p>
          <img src="@/assets/images/arrow.svg" alt="arrow icon" class="size-[20px]">
        </button>
      </div>
        <img src="@/assets/images/arrow_down.svg" alt="" class="animate-bounce bg-green-500 rounded-[50%] size-[35px] absolute bottom-5">
    </div>
  </main>



</template>
<script setup lang="ts">


</script>
