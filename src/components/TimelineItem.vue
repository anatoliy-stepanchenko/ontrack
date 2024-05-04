<template>
  <li class="border-grey-200 relative flex flex-col gap-2 border-t px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="options"
      placeholder="Rest"
      :selected="selectedActivityId"
      @select="selectedActivityId = $event"
    />
  </li>
</template>

<script setup>
import { ref } from "vue"
import BaseSelect from "../components/BaseSelect.vue"
import TimelineHour from "../components/TimelineHour.vue"

import { isTimelineItemValid } from "../validators"

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
})

const options = [
  { value: 1, label: "Coding" },
  { value: 2, label: "Reading" },
  { value: 3, label: "Training" },
]

const selectedActivityId = ref(1)
</script>

<style lang="scss" scoped></style>
