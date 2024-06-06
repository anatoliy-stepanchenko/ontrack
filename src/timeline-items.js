import { ref } from "vue"
import { activities } from "./activities"
import { HOURS_IN_A_DAY, MIDNIGHT_HOUR } from "./constants"
import { currentHour } from "./functions"

export const timelineItems = ref(generateTilineItems())

export const timelineItemRefs = ref([])

export function setTimelineItemActivity(timelineItem, activityId) {
  timelineItem.activityId = activityId
}

export function updateTimelineItemActivitySeconds(
  timelineItem,
  activitySeconds
) {
  timelineItem.activitySeconds = activitySeconds
}

export function resetTimelineItemActivities(activity) {
  timelineItems.value.forEach((timelineItem) => {
    if (timelineItem.activityId === activity.id) {
      timelineItem.activityId = null
      timelineItem.activitySeconds = 0
    }
  })
}

function generateTilineItems() {
  return [...Array(HOURS_IN_A_DAY).keys()].map((hour) => ({
    hour,

    activityId: [0, 1, 2, 3, 4].includes(hour)
      ? activities.value[hour % 3].id
      : null,
    activitySeconds: [0, 1, 2, 3, 4].includes(hour) ? hour * 600 : 0,
    // activityId: hour % 4 === 0 ? null : activities[hour % 2].id,
    // activitySeconds:
    //   hour % 4 === 0 ? 0 : (15 * SECONDS_IN_MINUTE * hour) % SECONDS_IN_HOUR,
  }))
}

export function getTotalActivitySeconds(activity) {
  return timelineItems.value
    .filter((timelineItem) => timelineItem.activityId === activity.id)
    .reduce(
      (totalSeconds, timelineItem) =>
        Math.round(timelineItem.activitySeconds + totalSeconds),
      0
    )
}

export function scrollToCurrentHour(isSmooth = true) {
  scrollToHour(currentHour(), isSmooth)
}

export function scrollToHour(hour, isSmooth = true) {
  const el =
    hour === MIDNIGHT_HOUR
      ? document.body
      : timelineItemRefs.value[hour - 1].$el

  el.scrollIntoView({ behavior: isSmooth ? "smooth" : "instant" })
}