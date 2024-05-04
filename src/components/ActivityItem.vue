<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton>
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity }}</span>
    </div>
    <div>
      <BaseSelec
        class="font-mono"
        placeholder="h:mm"
        :options="PERIOD_SELECT_OPTIONS"
        :selected="secondsToComplete"
        @select="secondsToComplete = $event"
      />
    </div>
  </li>
</template>

<script setup>
import { ref } from "vue"
import { TrashIcon } from "@heroicons/vue/24/outline"
import BaseButton from "./BaseButton.vue"
import BaseSelec from "./BaseSelect.vue"
import { PERIOD_SELECT_OPTIONS } from "../constants.js"
import { isActivityValid } from "../validators.js"

defineProps({
  activity: {
    recuared: true,
    type: String,
    validator: isActivityValid,
  },
})

const secondsToComplete = ref(null)
</script>

<style lang="scss" scoped></style>
