import { createRouter, createWebHashHistory  } from 'vue-router'
import ViewHome from '../views/ViewHome.vue'
import ViewResult from '../views/ViewResult.vue'

const routerOptions = {
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHome
    },
    {
      path: '/result',
      name: 'result',
      component: ViewResult
    },
  ]
};

const router = createRouter(routerOptions)

export default router
