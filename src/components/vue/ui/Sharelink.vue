<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { showShare } from "../../store/profileStore";

import facebook from "../../../../public/images/icons/facebook-2020-1-1.svg";
import twitter from "../../../../public/images/icons/twitter-6.svg";
import reddit from "../../../../public/images/icons/reddit-4.svg";
import linkedin from "../../../../public/images/icons/linkedin-icon.svg";
import pinterest from "../../../../public/images/icons/pinterest-1.svg";
import { SHARE_LINK, SHARE_SOCIAL } from "../../domain/constants";

const $showShare = useStore(showShare);

const shareFacebook = `${SHARE_LINK.FACEBOOK}u=${SHARE_SOCIAL.url}`;
const shareTwitter = `${SHARE_LINK.TWITTER}url=${SHARE_SOCIAL.url}&text=${SHARE_SOCIAL.text}`;
const shareReddit = `${SHARE_LINK.REDDIT}url=${SHARE_SOCIAL.url}&title=${SHARE_SOCIAL.title}`;
const shareLinkedin = `${SHARE_LINK.LINKEDIN}url=${SHARE_SOCIAL.url}&title=${SHARE_SOCIAL.title}`;
const sharePinterest = `${SHARE_LINK.PINTEREST}url=${SHARE_SOCIAL.url}&description=${SHARE_SOCIAL.text}`;

function hiddenShare() {
  showShare.set(false);
}
</script>
<template>
  <section v-if="$showShare">
    <div class="flex justify-between">
      <span>compartir en:</span>
    </div>
    <div class="grid gap-4 grid-cols-5 p-2 justify-items-center">
      <div>
        <a :href="shareFacebook" target="_share">
          <img
            :src="facebook"
            alt="share facebook"
            class="h-9 w-9 cursor-pointer"
            @click="hiddenShare"
          />
        </a>
      </div>
      <div>
        <a :href="shareTwitter" target="_share">
          <img
            :src="twitter"
            alt="share twitter"
            class="h-9 w-9 cursor-pointer"
            @click="hiddenShare"
          />
        </a>
      </div>
      <div>
        <a :href="shareReddit" target="_share">
          <img
            :src="reddit"
            alt="share reddit"
            class="w-9 w-9 cursor-pointer"
            @click="hiddenShare"
          />
        </a>
      </div>
      <div>
        <a :href="shareLinkedin" target="_share">
          <img
            :src="linkedin"
            alt="share linkedin"
            class="h-9 w-9 cursor-pointer"
            @click="hiddenShare"
          />
        </a>
      </div>
      <div>
        <a :href="sharePinterest" target="_share">
          <img
            :src="pinterest"
            alt="share pinterest"
            class="h-9 w-9 cursor-pointer"
            @click="hiddenShare"
          />
        </a>
      </div>
    </div>
  </section>
</template>
