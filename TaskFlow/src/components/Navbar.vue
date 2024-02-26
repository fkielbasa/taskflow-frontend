<template>
  <nav 
    class="nav m-0  flex justify-center w-screen h-22 fixed top-0 left-0 z-10 border-b-[1px] border-gray-300 min-[550px]:h-14"
    :class="{'bg-black': setColorChange, 'bg-white': !setColorChange}"
  >
    <div class="max-w-screen-2xl w-full flex justify-center items-center min-[500px]:justify-evenly min-[500px]:mx-12 min-[550px]:mx-4 sm:justify-between sm:mx-4 xl:mx-14 min-[1920px]:mx-0">
      <div class="flex items-center justify-between">
        <logo class="size-[45px] min-[550px]:size-[35px]" />
        <ul class="flex flex-col items-center min-[550px]:flex-row">
          <li 
            v-for="(section, index) in sections" 
            :key="index" 
            class="py-1 cursor-pointer m-auto h-full  px-6 flex items-center border-b-2 border-transparent text-grey hover:bg-gray-300 hover:rounded-sm transition-all duration-400"
            @click="scrollToSection(section)"
          >
              <nav-item :section="section" />
          </li>
        </ul>
      </div>
      <div class=" mx-4 flex flex-col-reverse items-center gap-y-2  justify-center min-[550px]:flex-row gap-x-2">
        <RouterLink 
          to="/register"
          class="text-grey hover:bg-gray-300 hover:rounded-sm transition-all duration-400 mx-0 px-4 py-1 text-sm h-full font-medium sm:text-base"
        >
          Register
        </RouterLink>
        <RouterLink 
          to="/login" 
          class="mx-0 px-6 py-1 bg-blue hover:opacity-90 text-white font-medium text-sm rounded-sm sm:text-base" 
        >
          Login
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import NavItem from './NavItem.vue'
import Logo from '@/components/Logo.vue';
import { scrollToSection } from '@/utils/scroll'

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
  document.querySelectorAll('.nav ul li').forEach(item => {
    item.classList.remove('!text-blue');
  });
  if (currentActiveIndex !== -1) {
    const activeListItem = document.querySelectorAll('.nav ul li')[currentActiveIndex];
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
// window.addEventListener('scroll', changeNavbarColor);

</script>