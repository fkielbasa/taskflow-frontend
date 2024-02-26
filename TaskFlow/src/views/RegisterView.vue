<script setup lang="ts">
import Label from "@/components/form/Label.vue";
import Input from "@/components/form/Input.vue";
import { ref } from 'vue';

// variable declarations
const section = ref(false);
const buttonNext = ref(true);
const buttonSign = ref(false);
const elementToScroll = ref<HTMLElement | null>(null);

// show section and scroll to it
const showSection = () => {
    section.value = true;
    setTimeout(() => {
      if (elementToScroll.value) {
        elementToScroll.value.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10);
  buttonNext.value = false;
  buttonSign.value = true;
};

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
          <Label name="email" content="Email address"/>
          <Input id="email" name="email" type="email" autocomplete="email" />
        </div>

        <div>
          <Label name="password" content="Password"/>
          <Input id="password" name="password" type="password" autocomplete="current-password" />
        </div>

        <div>
          <Label name="password" content="Repeat password"/>
          <Input id="password" name="password" type="password" autocomplete="current-password" />
        </div>

        <button v-if="buttonNext" type="button" @click="showSection" class="buttonCustomStyle flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Next step</button>


          <div v-if="section" ref="elementToScroll" class="space-y-6">
            <div>
              <Label name="username" content="Username"/>
              <Input id="username" name="username" type="text" autocomplete="username" />
            </div>

            <div>
              <Label name="name" content="First name"/>
              <Input id="name" name="name" type="text" autocomplete="name" />
            </div>

            <div>
              <Label name="surname" content="Last name"/>
              <Input id="surname" name="surname" type="text" autocomplete="surname" />
            </div>

            <div>
              <Label name="birthDate" content="Date of birth"/>
              <Input id="birthDate" name="birthDate" type="date" autocomplete="birthDate" />
            </div>
        </div>

        <button v-if="buttonSign" type="submit" class="buttonCustomStyle flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>

      </form>
    </div>

  </div>
</template>

<style>
  @import '@/assets/styles/CustomStyles.module.css';
</style>
