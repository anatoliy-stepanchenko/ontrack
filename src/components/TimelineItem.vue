<template>
  <li class="border-grey-200 relative flex flex-col gap-2 border-t px-4 py-10">
    <a href="#" :class="hourClasses">{{ timelineItem.hour }}:00</a>
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

import { isTimelineItemValid } from "../validators"

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
})

const hourClasses = [
  " absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 font-mono text-lg",
  props.timelineItem.hour === new Date().getHours()
    ? "bg-purple-900 font-black text-white"
    : "bg-gray-100 text-gray-500",
]

const options = [
  { value: 1, label: "Coding" },
  { value: 2, label: "Reading" },
  { value: 3, label: "Training" },
]

const selectedActivityId = ref(1)
</script>

<style lang="scss" scoped></style>
