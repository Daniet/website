<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "@nanostores/vue";
import { msgSocial } from "../../store/profileStore";

import { CHANNEL_MSG } from "../../domain/constants";
import type { IMsg } from "../../domain/interfaces";

import Textfiled from "./Textfiled.vue";

const msg = ref<IMsg>({ name: "", subject: "", msg: "" });
const $msgSocial = useStore(msgSocial);

function handleInput(event: Event) {
  const { name, value }: any = event.target;
  msg.value = { ...msg.value, [name]: value };
}

function handleSubmit(event: Event) {
  event.preventDefault();
  const { url, name: social, ref }: any = $msgSocial.value;
  const { name, subject, msg: text }: any = msg.value;
  if (url == CHANNEL_MSG.WHATSAPP)
    window.open(
      `https://api.whatsapp.com/send/?phone=${ref}&text=hola soy ${name} te escribo para ${subject}\n${text}`,
      `_${social}`
    );
  hiddenFrom();
}

function hiddenFrom() {
  msgSocial.set(false);
}
</script>
<template>
  <form
    @submit="handleSubmit"
    class="flex flex-col space-y-2"
    v-if="$msgSocial.from == true"
  >
    <div class="text-center">Enviar mensaje por whatsapp</div>
    <Textfiled
      :attr="{ name: 'name', type: 'text', label: 'nombre', required: true }"
      @input="handleInput"
    />
    <Textfiled
      :attr="{ name: 'subject', type: 'text', label: 'motivo', required: true }"
      @input="handleInput"
    />
    <Textfiled
      :attr="{ name: 'msg', type: 'text', label: 'mensaje', required: true }"
      @input="handleInput"
    />
    <div class="flex items-center justify-between">
      <button @click="hiddenFrom">atras</button>
      <button type="submit" class="bg-orange text-white py-1 px-4 rounded-xl">
        enviar
      </button>
    </div>
  </form>
</template>
