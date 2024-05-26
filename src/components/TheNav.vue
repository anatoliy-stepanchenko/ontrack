<template>
  <nav class="sticky bottom-0 z-20 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in NAV_ICONS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'pointer-events-none bg-gray-200': page === currentPage }"
        @click="navigate(page)"
      >
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>

<script setup>
import NavItem from "./NavItem.vue"
import { NAV_ICONS } from "../constants"

import { navigate, currentPage } from "../router"
</script>

<style scoped></style>
