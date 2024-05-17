<template>
  <li class="border-grey-200 relative flex flex-col gap-2 border-t px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :options="activitySelectOptions"
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

import { isTimelineItemValid, validateSelectOptions } from "../validators"

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },
})

const selectedActivityId = ref(0)
</script>

<style lang="scss" scoped></style>
