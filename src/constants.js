export const PAGE_TIMELINE = "timeline"
export const PAGE_ACTIVITIES = "activities"
export const PAGE_PROGRESS = "progress"

import {
  ClockIcon,
  ListBulletIcon,
  ChartBarIcon,
} from "@heroicons/vue/24/outline"

export const NAV_ICONS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
}

export const HOURS_IN_A_DAY = 24
export const MIDNIGHT_HOUR = 0
