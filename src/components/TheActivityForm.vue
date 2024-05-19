<template>
  <form
    @submit.prevent="submit"
    class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
  >
    <input
      v-model="activity"
      type="text"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name"
    />
    <BaseButton :type="BUTTON_TYPE_PRIMARY" :disabled="activity.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>

<script setup>
import { nextTick, ref } from "vue"
import BaseButton from "./BaseButton.vue"
import { PlusIcon } from "@heroicons/vue/24/outline"
import { BUTTON_TYPE_PRIMARY } from "../constants.js"
import { isActivityValid } from "../validators"

const emit = defineEmits({
  submit: isActivityValid,
})

async function submit() {
  emit("submit", activity.value)
  activity.value = ""
  await nextTick() //this function is needed so that the DOM is updated first and then the scroll works
  window.scrollTo(0, document.body.scrollHeight)
}

const activity = ref("")
</script>

<style scoped></style>
