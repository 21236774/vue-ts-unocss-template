import { createPinia } from 'pinia'
// 数据持久化插件
import piniaPersist from 'pinia-plugin-persist'
import type { App } from 'vue'

export const setupStore = (app: App) => {
  const store = createPinia()
  store.use(piniaPersist)
  app.use(store)
}

export * from './modules'
