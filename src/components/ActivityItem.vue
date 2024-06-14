<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-4">
      <BaseButton
        :type="BUTTON_TYPE_DANGER"
        @click="deleteAndResetActivity(activity)"
      >
        <BaseIcon :name="ICON_TRASH" />
      </BaseButton>
      <span class="truncate text-xl">{{ activity.name }}</span>
    </div>
    <div class="flex gap-4">
      <BaseSelec
        class="grow font-mono"
        placeholder="hh:mm"
        :options="PERIOD_SELECT_OPTIONS"
        :selected="activity.secondsToComplete || null"
        @select="updateActivity(activity, { secondsToComplete: $event || 0 })"
      />
      <RemainingActivitySeconds
        v-if="activity.secondsToComplete"
        :activity="activity"
      />
    </div>
  </li>
</template>

<script setup>
import BaseButton from "./BaseButton.vue"
import BaseSelec from "./BaseSelect.vue"
import BaseIcon from "./BaseIcon.vue"
import RemainingActivitySeconds from "./RemainingActivitySeconds.vue"
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from "../constants.js"
import { isActivityValid } from "../validators.js"

import { deleteActivity, updateActivity } from "../activities"
import { timelineItems, resetTimelineItemActivities } from "../timeline-items"
import { ICON_TRASH } from "../icons"

defineProps({
  activity: {
    recuared: true,
    type: Object,
    validator: isActivityValid,
  },
})

function deleteAndResetActivity(activity) {
  resetTimelineItemActivities(timelineItems.value, activity),
    deleteActivity(activity)
}
</script>

<style lang="scss" scoped></style>
