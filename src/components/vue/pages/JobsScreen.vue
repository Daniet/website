<script setup lang="ts">
import { Marked } from "@ts-stack/markdown";
import type { PropType } from "vue";
import type { IJob } from "../../domain/interfaces";

const props = defineProps({
  data: Object as PropType<IJob[]>,
});
</script>
<template>
  <section class="min-h-screen flex flex-col justify-end">
    <div>
      <div v-for="(job, key) in data" :key="`description-${key}`">
        <article class="text-justify" v-html="Marked.parse(job.markdown)" />
      </div>
    </div>
    <div class="px-4 overflow-x-auto flex space-x-4 pb-8">
      <div
        class="flex flex-col space-y-3 p-2 mb-8 items-center"
        v-for="(job, key) in data"
        :key="`job-${key}`"
      >
        <img
          class="object-contain"
          style="max-width: 64px; max-height: 64px"
          :src="job.img"
          :alt="job.company"
        />
        {{ job.company }}
      </div>
    </div>
  </section>
</template>
