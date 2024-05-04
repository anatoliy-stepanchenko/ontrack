<template>
  <div class="flex gap-4">
    <BaseButton @click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      @change="emit('select', +$event.target.value)"
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
import { XMarkIcon } from "@heroicons/vue/24/outline"
import BaseButton from "./BaseButton.vue"

import {
  validateSelectOptions,
  isUndefinedOrNull,
  isNumberOrNull,
} from "../validators"

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

  selected: Number,
})

const emit = defineEmits({
  select: isNumberOrNull,
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>

<style scoped></style>
