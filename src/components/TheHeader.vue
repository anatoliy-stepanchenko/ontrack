<template>
  <headerg
    class="sticky top-0 z-20 flex items-center justify-between border-b-2 bg-white p-3"
  >
    <TheLogo @click="emit('navigate', PAGE_TIMELINE)" />
    <TheHeaderProgress @click="emit('navigate', PAGE_PROGRESS)" />
  </headerg>
</template>

<script setup>
import TheLogo from "./TheLogo.vue"
import TheHeaderProgress from "./TheHeadeerProgress.vue"

import { isPageValid } from "../validators"
import { PAGE_PROGRESS, PAGE_TIMELINE } from "../constants"

const emit = defineEmits({ navigate: isPageValid })
</script>

<style scoped></style>
