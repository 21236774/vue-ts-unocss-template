import { createApp } from 'vue'
import './style.css'
import 'virtual:uno.css'
import App from './App.vue'
import { setupRouter } from './router'

const app = createApp(App)
const setupApp = async () => {
  await setupRouter(app)

  app.mount('#app')
}
setupApp()
