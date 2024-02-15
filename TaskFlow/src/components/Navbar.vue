<template>
  <nav class="m-0 bg-white flex justify-between w-full h-16
              hover:shadow-md fixed top-0 left-0">
    <ul class="flex ml-[50px] ">
      <img  alt="" class="logo" src="@/assets/logo/TaskFlowSmallLogo.png" width="50" height="50">
      <li 
        v-for="(page, index) in pages" 
        :key="index" 
        class="py-3 cursor-pointer mx-3 m-auto"
      >
          <nav-item :page="page" @click="scrollToSection(page)"></nav-item>
      </li>
    </ul>
    <div>
      <RouterLink to="/register">
        <button class="text-blue mx-2 px-4 py-2 text-lg h-full ">Register</button>
      </RouterLink>
      <RouterLink to="/login" >
        <button  class="ml-2 mr-0 px-10 py-2 bg-blue text-white h-full font-bold text-lg">Login</button>
      </RouterLink>
    </div>
  </nav>
</template>

<script lang="ts">
import NavItem from './NavItem.vue'
export default {
  components: { NavItem },
  data() {
        return {
            pages: ['Home', 'About', 'Authors']
        }
    },
  methods: {
    scrollToSection(id: string){
      const element: HTMLElement | null = document.getElementById(id);
      console.log("tes")
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      }
    }
  }
}
</script>
