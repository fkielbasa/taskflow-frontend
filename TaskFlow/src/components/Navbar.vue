<template>
  <nav 
    class="nav m-0  flex justify-between w-screen h-16 fixed top-0 left-0 z-10"
    :class="{'bg-black': setColorChange, 'bg-transparent': !setColorChange}"
  >
    <ul class="flex">
      <logo />
      <li 
        v-for="(section, index) in sections" 
        :key="index" 
        class="py-0 cursor-pointer m-auto h-full  px-6 flex items-center border-b-2 border-transparent text-grey hover:text-blue transition-all duration-500"
        @click="scrollToSection(section)"
      >
          <nav-item :section="section" />
      </li>
    </ul>
    <div class=" mx-4">
      <RouterLink to="/register">
        <button class="text-blue mx-2 px-4 py-2 text-lg h-full font-medium">
          Register
        </button>
      </RouterLink>
      <RouterLink to="/login" >
        <button  class="ml-2 mr-0 px-10 py-2 bg-blue text-white font-medium text-lg rounded">
          Login
        </button>
      </RouterLink>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import NavItem from './NavItem.vue'
import Logo from './Logo.vue';

const sections: string[] = ['Home', 'About', 'Authors']
const setColorChange = ref(false)

const setActiveSection = () => {
  const windowHeight = window.innerHeight;
  let currentActiveIndex = -1;

  for (let index = 0; index < sections.length; index++) {
    const section = sections[index];
    const element = document.getElementById(section);

    if (element) {
      const topOffset = element.offsetTop;
      const bottomOffset = topOffset + element.offsetHeight;
      const halfSectionHeight = element.offsetHeight / 2;
      const sectionAboveViewport = bottomOffset - halfSectionHeight <= window.scrollY + 60;
      const sectionBelowViewport = topOffset + halfSectionHeight >= window.scrollY + windowHeight;
      const sectionHalfInView = !sectionAboveViewport && !sectionBelowViewport;
      if (sectionHalfInView) {
        currentActiveIndex = index;
        break;
      }
    }
  }
  if (currentActiveIndex === -1) {
    for (let index = 0; index < sections.length; index++) {
      const section = sections[index];
      const element = document.getElementById(section);

      if (element) {
        const topOffset = element.offsetTop;
        if (topOffset >= window.scrollY + 60) {
          currentActiveIndex = index;
          break;
        }
      }
    }
  }
  document.querySelectorAll('.nav li').forEach(item => {
    item.classList.remove('!text-blue');
  });
  if (currentActiveIndex !== -1) {
    const activeListItem = document.querySelectorAll('.nav li')[currentActiveIndex];
    activeListItem.classList.add('!text-blue');
  }
}
window.addEventListener('scroll', setActiveSection);

const changeNavbarColor = () => {
  if (window.scrollY >= 70) { 
    setColorChange.value = true;  
  } else {
    setColorChange.value = false;
  } 
};
window.addEventListener("scroll", changeNavbarColor);

const scrollToSection = (id: string)  => {
  const element: HTMLElement | null = document.getElementById(id);
  if (element) {
    const rect = element.getBoundingClientRect();
    window.scrollTo({
      top: rect.top - 50 + window.scrollY,
      left: rect.left + window.scrollX,
      behavior: 'smooth'
    });
  }
}

</script>