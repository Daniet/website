<script setup lang="ts">
import { Marked } from "@ts-stack/markdown";
import { onMounted, PropType, ref } from "vue";
import type { IJob } from "../../domain/interfaces";

const props = defineProps({
  data: Object as PropType<IJob[]>,
});
const indexJob = ref<number>(0);

// onMounted(() => {
//   // scrollJbos.value = document.querySelector("#scroll-jobs");
//   console.log(document.querySelectorAll("#scroll-jobs .item-job"));
// });

function showJobs(keyJobs: number) {
  const jobs = document.querySelectorAll("#scroll-jobs .item-job");
  let top = 0;
  for (let x = 1; x < jobs.length; x++) {
    if (x < keyJobs) top += jobs[x].scrollWidth + 16;
  }
  indexJob.value = keyJobs;
  document.querySelector("#scroll-jobs")?.scrollTo(top, 0);
}
</script>
<template>
  <section id="jobs" class="min-h-screen flex flex-col justify-between">
    <div class="p-4">
      <div v-for="(job, key) in data" :key="`description-${key}`">
        <article
          class="text-justify"
          v-html="Marked.parse(job.markdown)"
          v-if="indexJob == key"
        />
      </div>
    </div>
    <div class="flex flex-col space-y-2">
      <div
        id="scroll-jobs"
        class="px-8 overflow-x-auto flex space-x-4 pb-8 scroll-smooth"
      >
        <div
          class="item-job flex flex-col space-y-3 py-2 px-4 mb-32 items-center cursor-pointer bg-white shadow-lg rounded-lg"
          v-for="(job, key) in data"
          :key="`job-${key}`"
          @click="showJobs(key)"
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
    </div>
  </section>
</template>
