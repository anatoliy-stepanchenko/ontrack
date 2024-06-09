<template>
  <div class="flex gap-4">
    <BaseButton @click="select(null)">
      <BaseIcon :name="ICON_X_MARK" />
    </BaseButton>
    <select
      @change="select($event.target.value)"
      class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
    >
      <option :selected="isNotSelected" disabled value="">
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed } from "vue"
import BaseButton from "./BaseButton.vue"
import BaseIcon from "./BaseIcon.vue"
import { normalizeSelectValue } from "../functions"

import {
  validateSelectOptions,
  isUndefinedOrNull,
  isSelectValueValid,
} from "../validators"
import { ICON_X_MARK } from "../icons"

const props = defineProps({
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions,
  },

  placeholder: {
    required: true,
    type: String,
  },

  selected: [String, Number],
})

const emit = defineEmits({
  select: isSelectValueValid,
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

function select(value) {
  emit("select", normalizeSelectValue(value))
}
</script>

<style scoped></style>
