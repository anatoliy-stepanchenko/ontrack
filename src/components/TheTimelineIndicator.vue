<template>
  <hr
    ref="indicatorRef"
    class="pointer-events-none absolute z-10 w-full border-b-2 border-red-600"
    :style="{ top: `${topOffset}px` }"
  />
</template>

<script setup>
import { ref, computed, watchEffect, onActivated, onDeactivated } from "vue"
import {
  HUNDRED_PERCENT,
  SECONDS_IN_DAY,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  MILLISECONDS_IN_SECOND,
} from "../constants"

const indicatorRef = ref()

const secondsSinceMidnight = ref(calculateSecondsSinceMidnight())

let timer = null

onActivated(() => {
  secondsSinceMidnight.value = calculateSecondsSinceMidnight()

  timer = setInterval(() => {
    secondsSinceMidnight.value += 5 * 60
  }, MILLISECONDS_IN_SECOND)
})

onDeactivated(() => clearInterval(timer))

const topOffset = computed(
  () =>
    (secondsSinceMidnightInPercent.value * getTimelineHeight()) /
    HUNDRED_PERCENT
)

const secondsSinceMidnightInPercent = computed(
  () => (secondsSinceMidnight.value * HUNDRED_PERCENT) / SECONDS_IN_DAY
)

function calculateSecondsSinceMidnight() {
  const now = new Date()

  return (
    SECONDS_IN_MINUTE * MINUTES_IN_HOUR * now.getHours() +
    SECONDS_IN_MINUTE * now.getMinutes() +
    now.getSeconds()
  )
}

function getTimelineHeight() {
  return indicatorRef.value?.parentNode.getBoundingClientRect().height
}

watchEffect(() => {
  if (secondsSinceMidnight.value > SECONDS_IN_DAY) {
    secondsSinceMidnight.value = 0
  }
})
</script>

<style scoped></style>
