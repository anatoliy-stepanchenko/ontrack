<template>
  <li class="flex flex-col gap-1 p-4">
    <div class="truncate text-xl">{{ activity.name }}</div>
    <div class="flex h-5 overflow-hidden rounded bg-neutral-200">
      <div :class="colorClass" :style="`width: ${percentage}%`"></div>
    </div>
    <div class="flex justify-between font-mono text-sm">
      <span>{{ percentage }}%</span>
      <span
        >{{ formatSeconds(trackedSeconds) }} /
        {{ formatSeconds(activity.secondsToComplete) }}</span
      >
    </div>
  </li>
</template>

<script setup>
import { useProgress } from "../composables/progress"
import { formatSeconds } from "../functions"
import { isActivityValid } from "../validators"

const props = defineProps({
  activity: {
    required: true,
    type: Object,
    valdator: isActivityValid,
  },
})

const { colorClass, percentage, trackedSeconds } = useProgress(props.activity)
</script>

<style scoped></style>
