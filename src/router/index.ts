import {
  MessagesView,
  NotificationsView,
  WishlistView,
  AchievementsView,
  CourseDetailsView,
  CourseListView,
  HomeView
} from '@/views/dashboard'

import NotFoundView from '@/views/NotFoundView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/dashboard/home', name: 'home', component: HomeView },
    { path: '/dashboard/courses', name: 'courses', component: CourseListView },
    { path: '/dashboard/courses/:id', name: 'courseDetails', component: CourseDetailsView },
    { path: '/dashboard/achievements', name: 'achievements', component: AchievementsView },
    { path: '/dashboard/messages', name: 'messages', component: MessagesView },
    { path: '/dashboard/wishlist', name: 'wishlist', component: WishlistView },
    { path: '/dashboard/notifications', name: 'notifications', component: NotificationsView },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
