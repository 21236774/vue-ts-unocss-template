import { createApp } from 'vue'
import './style.css'
import 'virtual:uno.css'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'

const app = createApp(App)
const setupApp = async () => {
  setupStore(app)

  await setupRouter(app)

  app.mount('#app')
}
setupApp()
