<template >
  <div 
    id="About" 
    class=" bg-blue flex flex-col items-center justify-center py-10 scroll-mt-[-10px] overflow-x-hidden"
  >
    <h3 class=" aboutInfo font-bold text-full_black  text-4xl min-[500px]:text-5xl lg:text-6xl ">
      About
    </h3>
    <div class=" max-w-screen-xl flex flex-col items-center px-6 ">
      <about-item
        :img="team"
        alt="Picture of teamwork"
        content="Our application enables easy addition of members to project teams and effective collaboration among them. With a clear team structure and flexible communication tools, users can quickly establish contact, exchange ideas, and collaborate efficiently on projects."
        :reversed="false"
      />
      <about-item
        :img="task"
        alt="Adding task"
        content="The feature of adding new tasks in our application allows for easy creation and management of task lists in the project. Users can quickly add new tasks, define priorities, deadlines, and assign them to specific employees. This ensures clarity in task assignment and effective task management."
        :reversed="true"
      />
      <about-item
        :img="done"
        alt="Done work"
        content="Our application provides a simple way to complete work on tasks and close projects. Upon completion of a task, users can easily mark it as completed, allowing for project progress tracking and identification of completed stages. This also enables transparent reporting and analysis of project performance."
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
