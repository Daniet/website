<script setup lang="ts">
import Navbar from "../ui/Navbar.vue";
</script>
<template>
  <section id="home" class="h-screen flex flex-col justify-between">
    <div>
      <h1 class="p-3 text-2xl font-bold">Daniel Andrés</h1>
    </div>
    <div class="flex flex-col">
      <div class="w-full px-16 mb-32 text-center">
        <slot />
      </div>
    </div>
    <Navbar />
  </section>
</template>
