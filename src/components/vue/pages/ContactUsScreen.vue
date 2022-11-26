<script setup lang="ts">
import { Marked } from "@ts-stack/markdown";
import { PropType, ref } from "vue";
import type { IContacUsScreen, ISocialNetwork } from "../../domain/interfaces";
import Contact from "../ui/Contact.vue";
import ShareLink from "../ui/Sharelink.vue";
import ButtomShare from "../ui/ButtomShare.vue";
import Social from "../ui/Social.vue";
import {
  URL_LINKEDIN,
  URL_TELEGRAM,
  URL_WHATSAPP,
} from "../../domain/constants";
import instagramIcon from "../../../../public/images/icons/instagram-2-1.svg";
import linkedinIcon from "../../../../public/images/icons/linkedin-icon.svg";
import telegramIcon from "../../../../public/images/icons/telegram-1.svg";
import whatsappIcon from "../../../../public/images/icons/whatsapp__iconlogovector.com-003.svg";

const props = defineProps({
  data: Object as PropType<IContacUsScreen>,
});
const social = ref<ISocialNetwork[]>([
  {
    url: "https://www.instagram.com/",
    ref: props.data?.social.instagram ?? "",
    img: instagramIcon,
    name: "instagram",
    from: false,
  },
  {
    url: URL_LINKEDIN,
    ref: props.data?.social.linkedin ?? "",
    img: linkedinIcon,
    name: "LinkedIn",
    from: false,
  },
  {
    url: URL_TELEGRAM,
    ref: props.data?.social.telegram ?? "",
    img: telegramIcon,
    name: "Telegram",
    from: false,
  },
  {
    url: URL_WHATSAPP,
    ref: props.data?.social.whatsapp ?? "",
    img: whatsappIcon,
    name: "Whatsapp",
    from: true,
  },
]);

function showProps() {
  console.log(props.data?.social);
}
</script>
<template>
  <section id="contact-us" class="h-screen flex justify-center items-center">
    <div>
      <article v-html="Marked.parse(data?.markdown ?? '')" />
      <div>
        <Contact />
        <Social :data="social" />
      </div>
      <div>
        <div class="flex justify-end">
          <ButtomShare client:load />
        </div>
        <ShareLink />
      </div>
    </div>
  </section>
</template>
