<template>
  <li class="border-grey-200 relative flex flex-col gap-2 border-t px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="timelineItem.activityId"
      @select="selectActivity"
    />
    <div class="flex w-full gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER"
        ><ArrowPathIcon class="h-8"
      /></BaseButton>
      <div
        class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono text-3xl"
      >
        00:00:00
      </div>
      <BaseButton :type="BUTTON_TYPE_WARNING"
        ><PauseIcon class="h-8"
      /></BaseButton>
      <BaseButton :type="BUTTON_TYPE_SUCCESS"
        ><PlayIcon class="h-8"
      /></BaseButton>
    </div>
  </li>
</template>

<script setup>
import { ArrowPathIcon, PauseIcon, PlayIcon } from "@heroicons/vue/24/outline"
import BaseSelect from "../components/BaseSelect.vue"
import BaseButton from "./BaseButton.vue"
import TimelineHour from "../components/TimelineHour.vue"
import {
  NULLABLE_ACTIVITY,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_WARNING,
  BUTTON_TYPE_SUCCESS,
} from "../constants"

import {
  isTimelineItemValid,
  validateSelectOptions,
  isActivityValid,
  validateActivities,
} from "../validators"

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
})

const emit = defineEmits({
  selectActivity: isActivityValid,
})

function selectActivity(id) {
  emit("selectActivity", findActivityById(id))
}

function findActivityById(id) {
  return (
    props.activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY
  )
}
</script>

<style lang="scss" scoped></style>
