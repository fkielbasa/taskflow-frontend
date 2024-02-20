<template>
  <nav class="m-0 bg-white flex justify-between w-full h-16
              shadow-md fixed top-0 left-0">
    <ul class="flex">
      <img  alt="" class="logo mx-10" src="@/assets/logo/TaskFlowSmallLogo.png" width="50" height="50">
      <li 
        v-for="(section, index) in sections" 
        :key="index" 
        class="py-0 cursor-pointer m-auto h-full  px-6 flex items-center border-b-2 border-transparent text-grey hover:text-blue transition-all duration-500"
        @click="scrollToSection(section)"
      >
          <NavItem :section="section" ></NavItem>
      </li>
      <p><a href="https://storyset.com/web">Web illustrations by Storyset</a></p>
    </ul>
    <div>
      <RouterLink to="/register">
        <button class="text-blue mx-2 px-4 py-2 text-lg h-full font-semibold">Register</button>
      </RouterLink>
      <RouterLink to="/login" >
        <button  class="ml-2 mr-0 px-10 py-2 bg-blue text-white h-full font-semibold text-lg">Login</button>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import NavItem from './NavItem.vue'

const sections: string[] = ['Home', 'About', 'Authors']

const setActiveSection = () => {
  sections.forEach((section, index) => {
    const element = document.getElementById(section);
    const listItem = document.querySelectorAll('nav li')[index];

    if (element && (element.offsetTop <= window.scrollY + 20) && 
        (element.offsetTop + element.offsetHeight > window.scrollY + 20)) {
      // listItem.classList.add('border-blue','!text-blue');
      listItem.classList.add('!text-blue');
    } else {
      // listItem.classList.remove('border-blue','!text-blue');
      listItem.classList.remove('!text-blue');
    }

  })
}
window.addEventListener('scroll', setActiveSection);



const scrollToSection = (id: string)  => {
  const element: HTMLElement | null = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }
}

</script>
