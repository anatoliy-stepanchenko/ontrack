<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-4">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-4">
      <BaseSelec
        class="grow font-mono"
        placeholder="hh:mm"
        :options="periodSelectOptions"
        :selected="activity.secondsToComplete || null"
        @select="emit('setSecondsToComplete', $event || 0)"
      />
      <ActivitySecondsToComplete
        v-if="activity.secondsToComplete"
        :activity="activity"
      />
    </div>
  </li>
</template>

<script setup>
import { TrashIcon } from "@heroicons/vue/24/outline"
import BaseButton from "./BaseButton.vue"
import BaseSelec from "./BaseSelect.vue"
import ActivitySecondsToComplete from "./ActivitySecondsToComplete.vue"
import { BUTTON_TYPE_DANGER } from "../constants.js"
import { isActivityValid, isUndefined, isNumber } from "../validators.js"
import { inject } from "vue"

defineProps({
  activity: {
    recuared: true,
    type: Object,
    validator: isActivityValid,
  },
})

const emit = defineEmits({
  delete: isUndefined,
  setSecondsToComplete: isNumber,
})

const periodSelectOptions = inject("periodSelectOptions")
</script>

<style lang="scss" scoped></style>
