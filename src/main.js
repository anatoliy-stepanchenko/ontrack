import { createApp } from "vue"
import { syncState } from "./storage"
import App from "./App.vue"

import "./style.css"

syncState()

document.addEventListener("visibilitychange", () => {
  syncState(document.visibilityState === "visible")
})

createApp(App).mount("#app")
