<template>
  <ul class="divide-y">
    <span>progress</span>
    <ProgressItem
      v-for="(activity, index) in trackedActivities"
      :key="activity.id"
      :index="index"
      :activity="activity"
    />
  </ul>
</template>

<script setup>
import ProgressItem from "../components/ProgressItem.vue"
import { trackedActivities, activities } from "../activities"
</script>

<style scoped></style>
