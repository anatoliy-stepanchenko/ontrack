import { computed, ref } from "vue"
import { HOURS_IN_A_DAY, MIDNIGHT_HOUR } from "./constants"
import { isToday, today, toSeconds, endOfHour } from "./time"

export const timelineItems = ref([])

export const timelineItemRefs = ref([])

export const activeTimelineItem = computed(() =>
  timelineItems.value.find(({ isActive }) => isActive)
)

export function updateTimelineItem(timelineItem, fields) {
  return Object.assign(timelineItem, fields)
}

export function resetTimelineItemActivities(timelineItems, activity) {
  return filterTimelineItemsByActivity(timelineItems, activity).forEach(
    (timelineItem) =>
      updateTimelineItem(timelineItem, {
        activityId: null,
        activitySeconds:
          timelineItem.hour === today().getHours()
            ? timelineItem.activitySeconds
            : 0,
      })
  )
}

export function filterTimelineItemsByActivity(timelineItems, { id }) {
  return timelineItems.filter(({ activityId }) => activityId === id)
}

function generateTilineItems() {
  return [...Array(HOURS_IN_A_DAY).keys()].map((hour) => ({
    hour,
    activityId: null,
    activitySeconds: 0,
    isActive: false,
  }))
}

export function calculateTrackedActivitySeconds(timelineItems, activity) {
  return filterTimelineItemsByActivity(timelineItems, activity)
    .map(({ activitySeconds }) => activitySeconds)
    .reduce((total, seconds) => Math.round(total + seconds), 0)
}

export function scrollToCurrentHour(isSmooth = false) {
  scrollToHour(today().getHours(), isSmooth)
}

export function scrollToHour(hour, isSmooth = true) {
  const el =
    hour === MIDNIGHT_HOUR
      ? document.body
      : timelineItemRefs.value[hour - 1].$el

  el.scrollIntoView({ behavior: isSmooth ? "smooth" : "instant" })
}

export function initializeTimelineItems(state) {
  const lastActiveAt = new Date(state.lastActiveAt)

  timelineItems.value = state.timelineItems ?? generateTilineItems()

  if (activeTimelineItem.value && isToday(lastActiveAt)) {
    syncIdleSeconds(lastActiveAt)
  } else if (state.timelineItems && !isToday(lastActiveAt)) {
    resetTimelineItems()
  }
}

function syncIdleSeconds(timelineItems, lastActiveAt) {
  updateTimelineItem(activeTimelineItem.value, {
    activitySeconds:
      activeTimelineItem.value.activitySeconds +
      calculateIdleSeconds(lastActiveAt),
  })
}

function calculateIdleSeconds(lastActiveAt) {
  return lastActiveAt.getHours() === today().getHours()
    ? toSeconds(today() - lastActiveAt)
    : toSeconds(endOfHour(lastActiveAt) - lastActiveAt)
}

function resetTimelineItems() {
  timelineItems.value.forEach((timelineItem) =>
    updateTimelineItem(timelineItem, {
      activitySeconds: 0,
      isActive: false,
    })
  )
}
