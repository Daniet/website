<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "@nanostores/vue";

import { msgSocial } from "../../store/profileStore";

import type { PropType } from "vue";
import type { ISocialNetwork } from "../../domain/interfaces";

const props = defineProps({
  data: Object as PropType<ISocialNetwork[]>,
});

const $msgSocial = useStore(msgSocial);

const channelMgs = ref<ISocialNetwork>();

const createUrl = (data: ISocialNetwork) => `${data.url}${data.ref}`;

function openSocial(event: MouseEvent, data: ISocialNetwork) {
  event.preventDefault();
  channelMgs.value = data;
  msgSocial.set(channelMgs.value);
  if (!data.from) window.open(createUrl(data), `_${data.name}`);
}
</script>
<template>
  <div
    class="grid gap-4 grid-cols-4 p-2 justify-items-center"
    :class="[$msgSocial.from ? `hidden` : `show`]"
  >
    <section v-for="(socialNetwork, key) in props.data" :key="key">
      <a
        :href="createUrl(socialNetwork)"
        :target="socialNetwork.name"
        @click="(event) => openSocial(event, socialNetwork)"
      >
        <img
          class="h-9 w-9"
          :src="socialNetwork.img"
          :alt="socialNetwork.name"
        />
      </a>
    </section>
  </div>
</template>
