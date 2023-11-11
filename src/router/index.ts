import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export enum Routes {
  HOME = '/',
  ADD = '/add',
  EDIT = '/employee/:id'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Routes.HOME,
      name: 'home',
      component: HomeView
    },
    {
      path: Routes.ADD,
      name: 'add',
      component: () => import('@/views/AddView.vue')
    },
    {
      path: Routes.EDIT,
      name: 'edit',
      component: () => import('@/views/EditView.vue')
    }
  ]
})

export default router
