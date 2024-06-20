import { ref, computed } from "vue"
import {
  HUNDRED_PERCENT,
  SECONDS_IN_DAY,
  SECONDS_IN_HOUR,
  MILLISECONDS_IN_SECOND,
} from "./constants"

export function today() {
  const today = new Date()

  // today.setHours(0, 0)

  return today
}

export function tomorrow() {
  const tomorrow = today()

  tomorrow.setDate(tomorrow.getDate() + 1)

  return tomorrow
}

export function isToday(date) {
  return date.toDateString() === today().toDateString()
}

export const now = ref(today())

const midnight = computed(() => new Date(now.value).setHours(0, 0, 0, 0))

export const secondsSinceMidnightInPercent = computed(
  () => (secondsSinceMidnight.value * HUNDRED_PERCENT) / SECONDS_IN_DAY
)

const secondsSinceMidnight = computed(
  () => (now.value - midnight.value) / MILLISECONDS_IN_SECOND
)

let currentDateTimer = null

export function toSeconds(milliseconds) {
  return Math.round(milliseconds / MILLISECONDS_IN_SECOND)
}

export function endOfHour(date) {
  const endOfHour = new Date(date)
  endOfHour.setTime(
    endOfHour.getTime() + SECONDS_IN_HOUR * MILLISECONDS_IN_SECOND
  )
  endOfHour.setMinutes(0, 0, 0)

  return endOfHour
}

export function startCurrentDateTimer() {
  now.value = today()

  currentDateTimer = setInterval(() => {
    now.value = new Date(now.value.getTime() + MILLISECONDS_IN_SECOND)
  }, MILLISECONDS_IN_SECOND)
}

export function stopCurrentDateTimer() {
  clearInterval(currentDateTimer)
}
