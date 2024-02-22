<template >
  <div 
    id="About" 
    class=" bg-blue flex flex-col items-center justify-center py-10 scroll-mt-[-10px]"
  >
    <h3 class="font-bold text-full_black text-5xl">
      About
    </h3>
    <div class="max-w-screen-lg flex flex-col items-center">
      <about-item
        :img="team"
        alt="test"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia veritatis alias totam quos voluptate minima temporibus ipsa nobis quaerat eius quae cupiditate sapiente, dolorem obcaecati in voluptatum inventore magnam sed fugit? Facere eligendi libero perspiciatis dolor ullam distinctio earum ex iusto praesentium velit nesciunt totam aut ipsum obcaecati voluptatum nemo quo excepturi cupiditate facilis, cumque consequatur? Dignissimos vel deleniti quaerat molestias, repellendus, eaque ut officia corrupti quibusdam quidem sequi laboriosam."
        :reversed="false"
      />
      <about-item
        :img="task"
        alt="test"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia veritatis alias totam quos voluptate minima temporibus ipsa nobis quaerat eius quae cupiditate sapiente, dolorem obcaecati in voluptatum inventore magnam sed fugit? Facere eligendi libero perspiciatis dolor ullam distinctio earum ex iusto praesentium velit nesciunt totam aut ipsum obcaecati voluptatum nemo quo excepturi cupiditate facilis, cumque consequatur? Dignissimos vel deleniti quaerat molestias, repellendus, eaque ut officia corrupti quibusdam quidem sequi laboriosam."
        :reversed="true"
      />
      <about-item
        :img="done"
        alt="test"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia veritatis alias totam quos voluptate minima temporibus ipsa nobis quaerat eius quae cupiditate sapiente, dolorem obcaecati in voluptatum inventore magnam sed fugit? Facere eligendi libero perspiciatis dolor ullam distinctio earum ex iusto praesentium velit nesciunt totam aut ipsum obcaecati voluptatum nemo quo excepturi cupiditate facilis, cumque consequatur? Dignissimos vel deleniti quaerat molestias, repellendus, eaque ut officia corrupti quibusdam quidem sequi laboriosam."
        :reversed="false"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutItem from '@/components/AboutItem.vue'
import team from '@/assets/gifs/team.gif'
import task from '@/assets/gifs/add_tasks.gif'
import done from '@/assets/gifs/done.gif'

</script>
