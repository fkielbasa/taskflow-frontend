<script lang="ts">
import { config,getUserFromToken,logoutUser } from '@/config/auth';

export default {
  methods: {
    showConfig() {
      console.log(getUserFromToken());
    },
  },
};
</script>

<template>
<p>here will be something someday </p>
  <button @click="showConfig">Click</button>
</template>
