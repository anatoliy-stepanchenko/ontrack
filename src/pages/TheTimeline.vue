<template>
  <div class="relative mt-7">
    <TheTimelineIndicator />
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>

<script setup>
import { onActivated, onDeactivated } from "vue"
import TimelineItem from "../components/TimelineItem.vue"
import TheTimelineIndicator from "../components/TheTimelineIndicator.vue"
import { startCurrentDateTimer, stopCurrentDateTimer } from "../time"

import {
  timelineItems,
  timelineItemRefs,
  scrollToCurrentHour,
  stopTimelineItemTimer,
} from "../timeline-items"

stopTimelineItemTimer()

onActivated(() => {
  scrollToCurrentHour(), startCurrentDateTimer()
})

onDeactivated(stopCurrentDateTimer)
</script>

<style lang="scss" scoped></style>
