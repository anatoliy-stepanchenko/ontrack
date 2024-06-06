<template>
  <a :href="`#${PAGE_TIMELINE}`" class="text-sm" @click="handleClick">
    <img src="../assets/img/logo.png" alt="Logo" class="h-9" />
  </a>
</template>

<script setup>
import { PAGE_TIMELINE } from "../constants"
import { currentPage, navigate } from "../router"
import { scrollToCurrentHour } from "../timeline-items"

function handleClick() {
  currentPage.value === PAGE_TIMELINE
    ? scrollToCurrentHour(true)
    : navigate(PAGE_TIMELINE)
}
</script>

<style scoped></style>
