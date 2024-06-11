import { computed, ref } from "vue"
import { generateId } from "./functions"
import { getTotalActivitySeconds } from "./timeline-items"
import { HUNDRED_PERCENT } from "./constants"

export const activities = ref(generateActivities())

export const trackedActivities = computed(() => {
  return activities.value.filter(
    ({ secondsToComplete }) => secondsToComplete > 0
  )
})

export const activitySelectOptions = computed(() =>
  generateActivitySelectOptions(activities.value)
)

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function createActivity(activity) {
  activities.value.push(activity)
}

export function updateActivity(activity, fields) {
  return Object.assign(activity, fields)
}

export function getActivityProgress(activity) {
  const percentage =
    (getTotalActivitySeconds(activity) * HUNDRED_PERCENT) /
    activity.secondsToComplete
  return Math.floor(percentage)
}

function generateActivities() {
  return ["Coding", "Reading", "Training"].map((name, hours) => ({
    id: generateId(),
    name,
    secondsToComplete: 15 * 60, // hours * SECONDS_IN_HOUR,
  }))
}

function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({
    value: activity.id,
    label: activity.name,
  }))
}
