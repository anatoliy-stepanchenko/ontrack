<template>
  <li class="border-grey-200 relative flex flex-col gap-2 border-t px-4 py-10">
    <TimelineHour
      :hour="timelineItem.hour"
      @click.prevent="emit('scrollToHour', timelineItem.hour)"
    />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="timelineItem.activityId"
      @select="setTimelineItemActivity(timelineItem, $event)"
    />
    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>

<script setup>
import BaseSelect from "../components/BaseSelect.vue"
import TimelineStopwatch from "../components/TimelineStopwatch.vue"
import TimelineHour from "../components/TimelineHour.vue"

import { isTimelineItemValid, isHourValid } from "../validators"
import { inject } from "vue"

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
})

const emit = defineEmits({
  scrollToHour: isHourValid,
})

const activitySelectOptions = inject("activitySelectOptions")
const setTimelineItemActivity = inject("setTimelineItemActivity")
</script>

<style lang="scss" scoped></style>
