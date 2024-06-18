import { ref, computed } from "vue"
import {
  HUNDRED_PERCENT,
  SECONDS_IN_DAY,
  MILLISECONDS_IN_SECOND,
} from "./constants"

const date = new Date()

date.setHours(0, 0)

export const now = ref(date)

const midnight = computed(() => new Date(now.value).setHours(0, 0, 0, 0))

export const secondsSinceMidnightInPercent = computed(
  () => (secondsSinceMidnight.value * HUNDRED_PERCENT) / SECONDS_IN_DAY
)

const secondsSinceMidnight = computed(
  () => (now.value - midnight.value) / MILLISECONDS_IN_SECOND
)

let timer = null

export function startTimer() {
  now.value = date

  timer = setInterval(() => {
    now.value = new Date(now.value.getTime() + 60 * MILLISECONDS_IN_SECOND)
  }, MILLISECONDS_IN_SECOND)
}

export function stopTimer() {
  clearInterval(timer)
}
