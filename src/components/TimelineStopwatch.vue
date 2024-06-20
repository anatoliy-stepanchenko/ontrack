<template>
  <div class="flex w-full gap-4">
    <BaseButton
      :type="BUTTON_TYPE_DANGER"
      :disabled="!timelineItem.activitySeconds"
      @click="reset"
      ><BaseIcon :name="ICON_ARROW_PATH"
    /></BaseButton>
    <div
      class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl"
    >
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton v-if="isRunning" :type="BUTTON_TYPE_WARNING" @click="stop"
      ><BaseIcon :name="ICON_PAUSE"
    /></BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      @click="start"
      :disabled="props.timelineItem.hour !== now.getHours()"
      ><BaseIcon :name="ICON_PLAY"
    /></BaseButton>
  </div>
</template>

<script setup>
import { watchEffect, watch, onMounted } from "vue"
import BaseButton from "./BaseButton.vue"
import BaseIcon from "./BaseIcon.vue"
import { useStopwatch } from "../composables/stopWatch"

import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_WARNING,
  BUTTON_TYPE_SUCCESS,
} from "../constants"
import { formatSeconds } from "../functions"
import { updateTimelineItem } from "../timeline-items"
import { isTimelineItemValid } from "../validators"
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from "../icons"
import { now } from "../time"

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
})

const { seconds, isRunning, start, stop, reset } = useStopwatch(
  props.timelineItem.activitySeconds
)

onMounted(() => {
  if (props.timelineItem.isActive) {
    start()
  }
})

watchEffect(() =>
  updateTimelineItem(props.timelineItem, {
    activitySeconds: seconds.value,
  })
)

watchEffect(() => {
  if (props.timelineItem.hour !== now.value.getHours() && isRunning) {
    stop()
  }
})

watch(isRunning, () => {
  updateTimelineItem(props.timelineItem, {
    isActive: Boolean(isRunning.value),
  })
})
</script>

<style scoped></style>
