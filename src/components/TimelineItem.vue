<template>
  <li class="border-grey-200 relative flex flex-col gap-2 border-t px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="timelineItem.activityId"
      @select="selectActivity"
    />
  </li>
</template>

<script setup>
import BaseSelect from "../components/BaseSelect.vue"
import TimelineHour from "../components/TimelineHour.vue"
import { NULLABLE_ACTIVITY } from "../constants"

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
