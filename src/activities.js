import { computed, ref } from "vue"
import { generateId } from "./functions"
import { SECONDS_IN_HOUR } from "./constants"

export const activities = ref(generateActivities())

export const activitySelectOptions = computed(() =>
  generateActivitySelectOptions(activities.value)
)

export function deleteActivity(activity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function createActivity(activity) {
  activities.value.push(activity)
}

export function setActivitySecondsToComplete(activity, secondsToComplete) {
  activity.secondsToComplete = secondsToComplete || 0
}

function generateActivities() {
  return ["Coding", "Reading", "Training"].map((name, hours) => ({
    id: generateId(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOUR,
  }))
}

function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({
    value: activity.id,
    label: activity.name,
  }))
}
