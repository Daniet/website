<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { showShare } from "../../store/profileStore";

import share from "../../../../public/images/icons/share.svg";
import close from "../../../../public/images/icons/close.svg";
import { SHARE_SOCIAL } from "../../domain/constants";

const $showShare = useStore(showShare);

function shareLink() {
  if (!navigator.userAgentData.mobile) showShare.set(true);
  if ("share" in navigator)
    navigator
      .share({
        title: SHARE_SOCIAL.title,
        text: SHARE_SOCIAL.text,
        url: SHARE_SOCIAL.url,
      })
      .then(console.log)
      .catch(console.log);
}

function HidenSharelink() {
  showShare.set(false);
}
</script>
<template>
  <span>
    <span class="cursor-pointer" @click="shareLink" v-if="!$showShare">
      <img class="h-7 w-7" :src="share" alt="buttom share" />
    </span>
    <span class="cursor-pointer" @click="HidenSharelink" v-if="$showShare">
      <img class="h-7 w-7" :src="close" alt="buttom share" />
    </span>
  </span>
</template>
