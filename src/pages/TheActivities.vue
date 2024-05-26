<template>
  <div class="flex grow flex-col">
    <ul v-if="activities.length" class="grow divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @set-seconds-to-complete="setSecondsToComplete(activity, $event)"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm />
  </div>
</template>

<script setup>
import ActivityItem from "../components/ActivityItem.vue"
import TheActivityForm from "../components/TheActivityForm.vue"
import TheActivitiesEmptyState from "../components/TheActivitiesEmptyState.vue"

import { validateActivities } from "../validators.js"

defineProps({
  activities: {
    recuared: true,
    type: Array,
    validator: validateActivities,
  },
})
</script>

<style scoped></style>
