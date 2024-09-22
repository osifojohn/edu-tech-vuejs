import CourseDetailsView from '@/views/CourseDetailsView.vue'
import CourseListView from '@/views/CourseListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard/courses/details',
      name: 'details',
      component: CourseDetailsView
    },
    {
      path: '/dashboard/home',
      name: 'home',
      component: CourseListView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
