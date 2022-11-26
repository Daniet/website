<script setup lang="ts">
import type { PropType } from "vue";
import type { ITextField } from "../../domain/interfaces";

const props = defineProps({
  attr: Object as PropType<ITextField>,
});

const emit = defineEmits(["input"]);

function handleInput(event: Event) {
  const { value }: any = event.target;
  const target = { ...event.target, ...props.attr, value: value };
  emit("input", { ...event, target: target });
}
</script>
<template>
  <div class="flex items-center pb-2 border-b-2">
    <label :for="props.attr?.name">{{ props.attr?.label }}:</label>
    <input
      :id="props.attr?.name"
      :type="props.attr?.type"
      @input="handleInput"
      :required="props.attr?.required"
      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      autocomplete="off"
    />
  </div>
</template>
