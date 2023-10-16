import {
  PAGE_TIMELINE,
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  HOURS_IN_A_DAY,
} from "./constants"

export function normalizePageHash() {
  const hash = window.location.hash.slice(1)

  if ([PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS].includes(hash)) {
    return hash
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export function generateTilineItems() {
  const timelineItems = []

  for (let hour = 0; hour < HOURS_IN_A_DAY; hour++) {
    timelineItems.push({ hour })
  }

  return timelineItems
}
