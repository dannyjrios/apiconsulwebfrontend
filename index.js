console.log("Ejecutando...")

import {App} from "./routes/App.js"

window.addEventListener("load", App)
window.addEventListener("hashchange", App)
