<template>
  <headerg
    class="sticky top-0 z-20 flex items-center justify-between border-b-2 bg-white p-3"
  >
    <TheLogo @click="emit('goToTimeline')" />
    <TheHeaderProgress @click="emit('goToProgress')" />
  </headerg>
</template>

<script setup>
import TheLogo from "./TheLogo.vue"
import TheHeaderProgress from "./TheHeadeerProgress.vue"

const emit = defineEmits(["goToTimeline", "goToProgress"])
</script>

<style scoped></style>
