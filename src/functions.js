import {
  PAGE_TIMELINE,
  HOURS_IN_A_DAY,
  MIDNIGHT_HOUR,
  SECONDS_IN_HOUR,
} from "./constants"
import { isNull, isPageValid } from "./validators"

export function normalizePageHash() {
  const page = window.location.hash.slice(1)

  if (isPageValid(page)) {
    return page
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export function normalizeSelectValue(value) {
  return isNull(value) || isNaN(value) ? value : +value
}

export function generateActivities() {
  return ["Coding", "Reading", "Training"].map((name, hours) => ({
    id: generateId(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOUR,
  }))
}

export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function generateTilineItems() {
  const timelineItems = []

  for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_A_DAY; hour++) {
    timelineItems.push({ hour })
  }

  return timelineItems
}

export function generateActivitySelectOptions(activities) {
  return activities.map((activity) => ({
    value: activity.id,
    label: activity.name,
  }))
}
