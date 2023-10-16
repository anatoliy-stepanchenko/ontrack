<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timelineItem="timelineItem"
      />
    </ul>
  </div>
</template>

<script setup>
import TimelineItem from "../components/TimelineItem.vue"

defineProps(["timelineItems"])
</script>

<style lang="scss" scoped></style>
