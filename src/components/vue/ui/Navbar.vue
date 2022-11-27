<script setup lang="ts">
import { onMounted } from "vue";
onMounted(() => {
  window.addEventListener("scroll", logScroll);
});

function logScroll() {
  // console.log(window.scrollY);
}
</script>
<template>
  <div class="w-full fixed bottom-4">
    <nav class="mx-2 px-4 py-2 rounded-xl bg-secundary-100">
      <ul class="flex space-x-4 justify-end text-white">
        <li><a href="#home">Home</a></li>
        <li>
          <a href="#jobs" class="cursor-pointer">Jobs</a>
        </li>
        <li>
          <a href="#contact-us">Contact us</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
