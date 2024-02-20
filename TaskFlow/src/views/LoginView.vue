<script lang="ts">
 import { inject } from 'vue';
 import axios from 'axios';
 import DangerAlert from "@/components/DangerAlert.vue";
 import { useRouter } from 'vue-router';
 import {TOKEN_KEY,BASE_URL} from "@/config/auth";
export default {
  name: 'Login',
  components: {
    DangerAlert,
  },
  data() {
    return {
      email: '',
      password: '',
      emailCheck: false,
      passwordCheck: false
    }
  },
  watch: {
    email(){
      this.emailCheck = false;
    },
    password(){
      this.passwordCheck = false;
    }
  },
  methods: {
    async handleSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }

        this.user = googleUser.getBasicProfile().getEmail();
        console.log(this.$gAuth.signIn)
      } catch (error) {
        console.log(error);
        return null;
      }

    },
    async handleSignOut() {
      try {
        await this.$gAuth.signOut();
        this.user = '';
      } catch (error) {
        console.log(error);
      }
    },
    async login() {
      axios.post(
        `${BASE_URL}/Auth/login`,
        {
          email: this.email,
          password: this.password
        },
      )
      .then(response => {
        console.log('Response:', response.data);
        localStorage.setItem(TOKEN_KEY, response.data.token)
        this.$router.push('/tasks');
      })
      .catch(error => {
        console.error('Error:', error)
        this.emailCheck = true;
        this.passwordCheck = true;
      });
    }
  },
   setup() {
    const Vue3GoogleOauth = inject('Vue3GoogleOauth');

    return {
      Vue3GoogleOauth,
    };
   }
}
</script>

<template>
  <div class="flex flex-col justify-center min-h-screen bg-slate-200">
  <div class="max-w-md mx-auto px-6 py-6 lg:px-8 rounded-md bg-white">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="@/assets/logo/TaskFlowFullLogo.png" alt="main logo">
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="login" method="POST">
        <DangerAlert v-if="emailCheck && passwordCheck" error="Incorrect login or email"/>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-1">
            <input id="email" name="email" type="email" autocomplete="email" v-model="email" required
                   class='block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="/forgot-password" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-1">
            <input id="password" name="password" type="password" autocomplete="current-password" v-model="password" required
                   class='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
          </div>
        </div>
        <div>
          <button type="submit" class=" buttonCustomStyle flex w-full justify-center rounded-md px-3 py-1.5  text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
        <div>
          <button @click="handleSignIn" class="buttonCustomStyle flex  w-full items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <img src="@/assets/icons/google-icon.png" class="mx-2 h-5 w-auto"></img>
          Login with Google</button>
        </div>
      </form>
      <p class="mt-5 text-center text-sm text-gray-500">
        Not a member?
        <RouterLink to="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register now!</RouterLink >
      </p>
      <p class="text-sm text-center mt-auto pt-5">2024 TaskFlow. All rights reserved.</p>
    </div>
    </div>
  </div>
</template>

<style>
  @import '@/assets/styles/CustomStyles.module.css';
  .border-input-error {
    border-width: 2px;
    border-color: #EF4444;
  }
</style>
