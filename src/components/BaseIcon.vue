<template>
  <component :is="ICONS[name]" />
</template>

<script setup>
import { ICONS } from "../icons"
import { isIconValid } from "../validators"
defineProps({
  name: {
    required: true,
    type: String,
    validator: isIconValid,
  },
})
</script>

<style scoped></style>
