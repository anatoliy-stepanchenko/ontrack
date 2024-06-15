<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script setup>
import { isButtonTypeValid } from "../validators"

const props = defineProps({
  type: {
    default: BUTTON_TYPE_NEUTRAL,
    type: String,
    validarot: isButtonTypeValid,
  },
})

const classes = [
  "rounded disabled:cursor-not-allowed disabled:opacity-50",
  typeClassesButton[props.type],
]
</script>

<script>
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_PRIMARY,
} from "../constants.js"

const typeClassesButton = {
  [BUTTON_TYPE_DANGER]: " bg-red-500 p-3 enabled:hover:bg-red-600 text-white",
  [BUTTON_TYPE_SUCCESS]:
    " bg-green-500 p-3 enabled:hover:bg-green-600 text-white",
  [BUTTON_TYPE_WARNING]:
    " bg-yellow-400 p-3 enabled:hover:bg-yellow-500 text-white",
  [BUTTON_TYPE_NEUTRAL]: " bg-gray-100 p-3 enabled:hover:bg-gray-200",
  [BUTTON_TYPE_PRIMARY]: " bg-blue-400 p-3 enabled:hover:bg-blue-500",
}
</script>

<style scoped></style>
