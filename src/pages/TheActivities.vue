<template>
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
  </div>
</template>

<script setup>
import ActivityItem from "../components/ActivityItem.vue"
import { isActivityValid, validateActivities } from "../validators.js"

defineProps({
  activities: {
    recuared: true,
    type: Array,
    validator: validateActivities,
  },
})

const emit = defineEmits({
  deleteActivity: isActivityValid,
})
</script>

<style lang="scss" scoped></style>
