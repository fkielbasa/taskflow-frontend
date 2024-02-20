<script lang="ts">
import axios from "axios";
import SuccessAlert from "@/components/SuccessAlert.vue";
import DangerAlert from "@/components/DangerAlert.vue";
import {BASE_URL} from "@/config/auth";
export default {
  components: {DangerAlert, SuccessAlert},
  data() {
    return {
      token: this.$route.params.token,
      isValid: false,
      password: '',
      confirmPassword: '',
      passwordsMatch: false
    }
  },
  methods: {
    async checkToken(){
      axios.post(
          `${BASE_URL}/Auth/check-reset-token?token=${this.token}`
      )
          .then(response => {
            console.log(response.data);
            this.isValid = true;
          })
          .catch(error => {
            console.log('Error', error);
      });
    },
    async changePassword(){
      axios.post(
          `${BASE_URL}/Auth/change-password?resetToken=${this.token}&newPassword=${this.password}`
      )
          .then(response => {
            console.log(response.data);
            this.$router.push("/login");
          })
          .catch(error => {
            console.log('Error', error);
          });
    },
    checkPasswords() {
      if (this.password === this.confirmPassword) {
        this.changePassword()
      } else {
        this.passwordsMatch = true;
      }
    }
  },
  mounted() {
    this.checkToken();
  },
  watch: {
    password(){
      this.passwordsMatch = false;
    },
    confirmPassword(){
      this.passwordsMatch = false;
    }
  }
}
</script>

<template>
  <div class="flex flex-col justify-center min-h-screen bg-slate-200">
    <div class="max-w-md mx-auto px-6 py-6 lg:px-8 rounded-md bg-white">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="@/assets/logo/TaskFlowFullLogo.png" alt="main logo">
        <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Change password</h2>
      </div>
      <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <template v-if="isValid">
          <form class="space-y-6" @submit.prevent="checkPasswords" method="POST">
            <DangerAlert v-if="passwordsMatch" error="The passwords don't match."/>
            <div>
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="mt-1">
                <input id="password" name="password" type="password" autocomplete="current-password" v-model="password" required
                       class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
              </div>
            </div>
            <div>
              <label for="confirmPassword" class="block text-sm font-medium leading-6 text-gray-900">Confirm password</label>
              <div class="mt-1">
                <input id="confirmPassword" name="confirmPassword" type="password" autocomplete="current-password" v-model="confirmPassword" required
                       class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
              </div>
            </div>
            <button type="submit"
                    class=" buttonCustomStyle flex w-full justify-center rounded-md px-3 py-1.5 mb-3 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Change
            </button>
          </form>
        </template>
        <template v-else>
          <p class="text-center text-red-600">The link is invalid or expired.</p>
        </template>
        <p class="text-sm text-center mt-auto pt-5">2024 TaskFlow. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
