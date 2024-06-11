<template>
  <li class="border-grey-200 relative flex flex-col gap-2 border-t px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
      placeholder="Rest"
      :selected="timelineItem.activityId"
      @select="updateTimelineItem(timelineItem, { activityId: $event })"
    />
    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>

<script setup>
import BaseSelect from "../components/BaseSelect.vue"
import TimelineStopwatch from "../components/TimelineStopwatch.vue"
import TimelineHour from "../components/TimelineHour.vue"

import { isTimelineItemValid } from "../validators"

import { activitySelectOptions } from "../activities"
import { updateTimelineItem } from "../timeline-items"

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
})
</script>

<style lang="scss" scoped></style>
