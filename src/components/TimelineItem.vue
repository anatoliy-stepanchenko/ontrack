<template>
  <li class="border-grey-200 relative flex flex-col gap-2 border-t px-4 py-10">
    <a href="#" :class="hourClasses">{{ timelineItem.hour }}:00</a>
  </li>
</template>

<script setup>
const props = defineProps(["timelineItem"])

const hourClasses = [
  " absolute -top-4 left-1/2 -translate-x-1/2 rounded  px-2 font-mono text-lg",
  props.timelineItem.hour === new Date().getHours()
    ? "bg-purple-900 font-black text-white"
    : "bg-gray-100 textt-gray-500",
]
</script>

<style lang="scss" scoped></style>
