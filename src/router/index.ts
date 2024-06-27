import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import routes from '~pages'

const routesArr = [{ path: '/', redirect: '/party-building' }, ...routes]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routesArr
})

const setupRouter = (app: App) => {
  console.log('router', routes)
  app.use(router)
}

export { router, setupRouter }
