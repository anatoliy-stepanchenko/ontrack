import { createApp } from "vue"
import "./style.css"
import * as storage from "./storage"
import { timelineItems } from "./timeline-items"
import { activities } from "./activities"

import App from "./App.vue"

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    saveState()
  }
})

function saveState() {
  storage.save({
    timelineItems: timelineItems.value,
    activities: activities.value,
  })
}

createApp(App).mount("#app")
