<template>
  <form
    @submit.prevent="submit"
    class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
  >
    <input
      v-model="name"
      type="text"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name"
    />
    <BaseButton :type="BUTTON_TYPE_PRIMARY" :disabled="name.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>

<script setup>
import { inject, nextTick, ref } from "vue"
import BaseButton from "./BaseButton.vue"
import { PlusIcon } from "@heroicons/vue/24/outline"
import { BUTTON_TYPE_PRIMARY } from "../constants.js"
import { generateId } from "../functions"
import { createActivityKey } from "../keys"

const createActivity = inject(createActivityKey)

async function submit() {
  createActivity({
    id: generateId(),
    name: name.value,
    secondsToComplete: 0,
  })
  name.value = ""
  await nextTick() //this function is needed so that the DOM is updated first and then the scroll works
  window.scrollTo(0, document.body.scrollHeight)
}

const name = ref("")
</script>

<style scoped></style>
