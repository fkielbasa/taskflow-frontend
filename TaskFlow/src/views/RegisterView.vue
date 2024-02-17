<script setup lang="ts">
  import Label from "@/components/form/Label.vue";
  import Input from "@/components/form/Input.vue";

  import { ref } from 'vue';

  const option1 = ref(false);
  const first = () => {
    option1.value = true;
  }
</script>

<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="@/assets/logo/TaskFlowFullLogo.png" alt="main logo">
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up!</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">

        <div>
          <div class="flex items-center justify-between">
            <Label name="email" content="Email address"/>
          </div>
          <Input id="email" name="email" type="email" autocomplete="email" />
        </div>

        <div>
          <div class="flex items-center justify-between">
            <Label name="password" content="Password"/>
          </div>
          <Input id="password" name="password" type="password" autocomplete="current-password" />
        </div>

        <div>
          <div class="flex items-center justify-between">
            <Label name="password" content="Repeat password"/>
          </div>
          <Input id="password" name="password" type="password" autocomplete="current-password" />
        </div>

        <button type="button" @click="first" class="buttonCustomStyle flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next step</button>

        <div>
          <div v-if="option1">
            <h2>Show Me</h2>
          </div>

        </div>

        <button type="submit" class="buttonCustomStyle flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>

      </form>
    </div>

  </div>
</template>

<style>
  @import '@/assets/styles/CustomStyles.module.css';
</style>
