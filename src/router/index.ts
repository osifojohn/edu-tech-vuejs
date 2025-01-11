import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '@/views/NotFoundView.vue'
import { ROUTES } from '@/lib/constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: ROUTES.HOME.path, name: ROUTES.HOME.name, component: ROUTES.HOME.component },
    { path: ROUTES.COURSES.path, name: ROUTES.COURSES.name, component: ROUTES.COURSES.component },
    {
      path: ROUTES.COURSE_DETAILS.path,
      name: ROUTES.COURSE_DETAILS.name,
      component: ROUTES.COURSE_DETAILS.component
    },
    {
      path: ROUTES.ACHIEVEMENTS.path,
      name: ROUTES.ACHIEVEMENTS.name,
      component: ROUTES.ACHIEVEMENTS.component
    },
    {
      path: ROUTES.MESSAGES.path,
      name: ROUTES.MESSAGES.name,
      component: ROUTES.MESSAGES.component
    },
    {
      path: ROUTES.WISHLIST.path,
      name: ROUTES.WISHLIST.name,
      component: ROUTES.WISHLIST.component
    },
    {
      path: ROUTES.NOTIFICATIONS.path,
      name: ROUTES.NOTIFICATIONS.name,
      component: ROUTES.NOTIFICATIONS.component
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
