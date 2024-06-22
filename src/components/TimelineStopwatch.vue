<template>
  <div class="flex w-full gap-4">
    <BaseButton
      :type="BUTTON_TYPE_DANGER"
      :disabled="!timelineItem.activitySeconds"
      @click="resetTimelineItemTimer(timelineItem)"
      ><BaseIcon :name="ICON_ARROW_PATH"
    /></BaseButton>
    <div
      class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl"
    >
      {{ formatSeconds(timelineItem.activitySeconds) }}
    </div>
    <BaseButton
      v-if="timelineItemTimer && timelineItem.hour === now.getHours()"
      :type="BUTTON_TYPE_WARNING"
      @click="stopTimelineItemTimer(timelineItem)"
      ><BaseIcon :name="ICON_PAUSE"
    /></BaseButton>
    <BaseButton
      v-else
      :type="BUTTON_TYPE_SUCCESS"
      @click="startTimelineItemTimer(timelineItem)"
      :disabled="timelineItem.hour !== now.getHours()"
      ><BaseIcon :name="ICON_PLAY"
    /></BaseButton>
  </div>
</template>

<script setup>
import BaseButton from "./BaseButton.vue"
import BaseIcon from "./BaseIcon.vue"
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_WARNING,
  BUTTON_TYPE_SUCCESS,
} from "../constants"
import { formatSeconds } from "../functions"
import {
  resetTimelineItemTimer,
  startTimelineItemTimer,
  stopTimelineItemTimer,
  timelineItemTimer,
} from "../timeline-item-timer"
import { isTimelineItemValid } from "../validators"
import { ICON_ARROW_PATH, ICON_PAUSE, ICON_PLAY } from "../icons"
import { now } from "../time"

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
})
</script>

<style scoped></style>
