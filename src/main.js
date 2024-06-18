import { createApp } from "vue"
import "./style.css"
import * as storage from "./storage"
import { timelineItems } from "./timeline-items"
import { activities } from "./activities"

import App from "./App.vue"

loadState()

document.addEventListener("visibilitychange", () => {
  document.visibilityState === "visible" ? loadState() : saveState()
})

function saveState() {
  storage.save({
    timelineItems: timelineItems.value,
    activities: activities.value,
  })
}

function loadState() {
  const state = storage.load()
  timelineItems.value = state.timelineItems
  activities.value = state.activities
}

createApp(App).mount("#app")
