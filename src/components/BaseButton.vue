<template>
  <button
    :class="`${typeClassesButton[type]} rounded disabled:cursor-not-allowed disabled:opacity-50`"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { isButtonTypeValid } from "../validators"

defineProps({
  type: {
    default: BUTTON_TYPE_NEUTRAL,
    type: String,
    validarot: isButtonTypeValid,
  },
})
</script>

<script>
import { BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL } from "../constants.js"

const typeClassesButton = {
  [BUTTON_TYPE_DANGER]: " bg-red-500 p-3 enabled:hover:bg-red-600 text-white",
  [BUTTON_TYPE_NEUTRAL]: " bg-gray-100 p-3 enabled:hover:bg-gray-200",
}
</script>

<style scoped></style>
