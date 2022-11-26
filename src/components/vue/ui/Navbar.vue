<script setup lang="ts">
import { onMounted } from "vue";
onMounted(() => {
  window.addEventListener("scroll", logScroll);
});

function logScroll() {
  // console.log(window.scrollY)
}
</script>
<template>
  <div class="w-full">
    <nav class="mx-2 px-4 py-2 rounded-xl bg-blue-600">
      <ul class="flex space-x-4 justify-end text-white">
        <li>home</li>
        <li>jobs</li>
        <li>contact us</li>
      </ul>
    </nav>
  </div>
</template>
