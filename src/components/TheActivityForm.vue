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
      <BaseIcon :name="ICON_PLUS" />
    </BaseButton>
  </form>
</template>

<script setup>
import { nextTick, ref } from "vue"
import BaseButton from "./BaseButton.vue"
import BaseIcon from "./BaseIcon.vue"

import { BUTTON_TYPE_PRIMARY } from "../constants.js"
import { generateId } from "../functions"
import { createActivity } from "../activities"
import { ICON_PLUS } from "../icons"

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
