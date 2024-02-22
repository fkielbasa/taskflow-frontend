<template >
  <div 
    id="About" 
    class=" bg-blue flex flex-col items-center justify-center py-10 scroll-mt-[-10px] overflow-x-hidden"
  >
    <h3 class=" aboutInfo font-bold text-full_black  text-4xl min-[500px]:text-5xl sm:text-6xl ">
      About
    </h3>
    <div class=" max-w-screen-xl flex flex-col items-center px-6 ">
      <about-item
        :img="team"
        alt="Picture of teamwork"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia veritatis alias totam quos voluptate minima temporibus ipsa nobis quaerat eius quae cupiditate sapiente, dolorem obcaecati in voluptatum inventore magnam sed fugit? Facere eligendi libero perspiciatis dolor ullam distinctio earum ex iusto praesentium velit nesciunt totam aut ipsum obcaecati voluptatum nemo quo excepturi cupiditate facilis, cumque consequatur? Dignissimos vel deleniti quaerat molestias, repellendus, eaque ut officia corrupti quibusdam quidem sequi laboriosam."
        :reversed="false"
      />
      <about-item
        :img="task"
        alt="Adding task"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia veritatis alias totam quos voluptate minima temporibus ipsa nobis quaerat eius quae cupiditate sapiente, dolorem obcaecati in voluptatum inventore magnam sed fugit? Facere eligendi libero perspiciatis dolor ullam distinctio earum ex iusto praesentium velit nesciunt totam aut ipsum obcaecati voluptatum nemo quo excepturi cupiditate facilis, cumque consequatur? Dignissimos vel deleniti quaerat molestias, repellendus, eaque ut officia corrupti quibusdam quidem sequi laboriosam."
        :reversed="true"
      />
      <about-item
        :img="done"
        alt="Done work"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia veritatis alias totam quos voluptate minima temporibus ipsa nobis quaerat eius quae cupiditate sapiente, dolorem obcaecati in voluptatum inventore magnam sed fugit? Facere eligendi libero perspiciatis dolor ullam distinctio earum ex iusto praesentium velit nesciunt totam aut ipsum obcaecati voluptatum nemo quo excepturi cupiditate facilis, cumque consequatur? Dignissimos vel deleniti quaerat molestias, repellendus, eaque ut officia corrupti quibusdam quidem sequi laboriosam."
        :reversed="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutItem from '@/components/AboutItem.vue'
import team from '@/assets/gifs/team.gif'
import task from '@/assets/gifs/add_task.gif'
import done from '@/assets/gifs/done.gif'
import { onMounted } from 'vue';

let items: NodeListOf<HTMLElement> | null = null;

onMounted(() => {
  items = document.querySelectorAll('.aboutInfo');
});

const showItems = () => {
  if (items) {
    const triggerBottom = window.innerHeight / 5 * 4;
    items.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      if(itemTop < triggerBottom) {
        item.classList.add('!translate-x-0');
      }
    });
  }
}
window.addEventListener('scroll', showItems );
</script>
