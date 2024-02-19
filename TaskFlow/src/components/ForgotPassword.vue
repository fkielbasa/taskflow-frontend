<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      email: '',
      emailCheck: false
    }
  },
  methods: {
    async sendRecoveryMail() {
      axios.post(
          `https://localhost:7084/api/v1/Auth/forgot-password?email=${this.email}`
      )
          .then(response => {
            console.log(response.data)
            this.$router.push('home')
          })
          .catch(error => {
            console.error('Error:', error)
            this.emailCheck = true;
          });
    }
  }
}
</script>


<template>
  <div class="flex flex-col justify-center min-h-screen bg-slate-200">
    <div class="max-w-md mx-auto px-6 py-6 lg:px-8 rounded-md bg-white">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="@/assets/logo/TaskFlowFullLogo.png" alt="main logo">
        <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Recovery password</h2>
      </div>
      <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="sendRecoveryMail" method="POST">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-1">
              <input id="email" name="email" type="email" autocomplete="email" v-model="email" required :class="[emailCheck ? 'border-input-error' : 'border-0 ',
                  'block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6']">
              <button @click="showForgotPasswordForm = false" type="button"
                      class="font-semibold text-indigo-600 hover:text-indigo-500 focus:outline-none">Back to login
              </button>
            </div>
            <p v-if="emailCheck" class="text-red-500">Incorrect email</p>
          </div>
          <button type="submit"
                  class=" buttonCustomStyle flex w-full justify-center rounded-md px-3 py-1.5 mb-3 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Sent mail
          </button>
        </form>
        <p class="text-sm text-center mt-auto pt-5">2024 TaskFlow. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
