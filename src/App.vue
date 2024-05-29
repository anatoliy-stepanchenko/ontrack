<template>
  <TheHeader />
  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      ref="timelineRef"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav />
</template>

<script setup>
import { provide, readonly } from "vue"
import TheHeader from "./components/TheHeader.vue"
import TheNav from "./components/TheNav.vue"
import TheTimeline from "./pages/TheTimeline.vue"
import TheActivities from "./pages/TheActivities.vue"
import TheProgress from "./pages/TheProgress.vue"
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from "./constants"
import { generatePeriodSelectOptions } from "./functions"

import { currentPage, timelineRef } from "./router"

import * as keys from "./keys"

import {
  activities,
  createActivity,
  deleteActivity,
  setActivitySecondsoComplete,
  activitySelectOptions,
} from "./activities"

import {
  timelineItems,
  setTimelineItemActivity,
  updateTimelineItemActivitySeconds,
  resetTimelineItemActivities,
} from "./timeline-items"

provide(
  keys.updateTimelineItemActivitySecondsKey,
  updateTimelineItemActivitySeconds
)
provide(keys.timelineItemsKey, readonly(timelineItems))
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions))
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions()))
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity)
provide(keys.setActivitySecondsoCompleteKey, setActivitySecondsoComplete)
provide(keys.createActivityKey, createActivity)
provide(keys.deleteActivityKey, (activity) => {
  resetTimelineItemActivities(activity), deleteActivity(activity)
})
</script>

<style scoped></style>
