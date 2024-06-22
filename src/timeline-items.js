import { computed, ref } from "vue"
import { HOURS_IN_A_DAY, MIDNIGHT_HOUR } from "./constants"
import { now } from "./time"

export const timelineItems = ref(generateTilineItems())

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
          timelineItem.hour === now.value.getHours()
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
  scrollToHour(now.value.getHours(), isSmooth)
}

export function scrollToHour(hour, isSmooth = true) {
  const el =
    hour === MIDNIGHT_HOUR
      ? document.body
      : timelineItemRefs.value[hour - 1].$el

  el.scrollIntoView({ behavior: isSmooth ? "smooth" : "instant" })
}
