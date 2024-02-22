import { NAV_ICONS, HOURS_IN_A_DAY } from "./constants"

export function isPageValid(page) {
  return Object.keys(NAV_ICONS).includes(page)
}

export function isTimelineItemValid({ hour }) {
  return typeof hour === "number" && hour >= 0 && hour < HOURS_IN_A_DAY
}
