<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        @scroll-to-hour="scrollToHour(timelineItem.hour)"
        ref="timelineItemRefs"
      />
    </ul>
  </div>
</template>

<script setup>
import { nextTick, watchPostEffect } from "vue"
import TimelineItem from "../components/TimelineItem.vue"

import { currentPage } from "../router"
import {
  timelineItems,
  timelineItemRefs,
  scrollToHour,
  scrollToCurrentHour,
} from "../timeline-items"
import { PAGE_TIMELINE } from "../constants"

watchPostEffect(async () => {
  if (currentPage.value === PAGE_TIMELINE) {
    await nextTick()
    scrollToCurrentHour(false)
  }
})
</script>

<style lang="scss" scoped></style>
