export const API_BASE_URL = 'https://my-json-server.typicode.com/osifojohn/edu-tech-db'

import {
  LucideGrid,
  LucideBook,
  LucideGraduationCap,
  LucideMessageCircleCode,
  LucideHeart,
  LucideBell
} from 'lucide-vue-next'

import {
  MessagesView,
  NotificationsView,
  WishlistView,
  AchievementsView,
  CourseDetailsView,
  CourseListView,
  HomeView
} from '@/views/dashboard'

export const DASHBOARD_BASE = '/dashboard'

export const ROUTES = {
  HOME: {
    path: `${DASHBOARD_BASE}/home`,
    name: 'home',
    component: HomeView,
    labelName: 'Home',
    icon: LucideGrid
  },
  COURSES: {
    path: `${DASHBOARD_BASE}/courses`,
    name: 'courses',
    component: CourseListView,
    labelName: 'Courses',
    icon: LucideBook
  },
  COURSE_DETAILS: {
    path: `${DASHBOARD_BASE}/courses/:id`,
    name: 'courseDetails',
    component: CourseDetailsView
  },
  ACHIEVEMENTS: {
    path: `${DASHBOARD_BASE}/achievements`,
    name: 'achievements',
    component: AchievementsView,
    labelName: 'Achievements',
    icon: LucideGraduationCap
  },
  MESSAGES: {
    path: `${DASHBOARD_BASE}/messages`,
    name: 'messages',
    component: MessagesView,
    labelName: 'Messages',
    icon: LucideMessageCircleCode
  },
  WISHLIST: {
    path: `${DASHBOARD_BASE}/wishlist`,
    name: 'wishlist',
    component: WishlistView,
    labelName: 'Wishlist',
    icon: LucideHeart
  },
  NOTIFICATIONS: {
    path: `${DASHBOARD_BASE}/notifications`,
    name: 'notifications',
    component: NotificationsView,
    labelName: 'Notifications',
    icon: LucideBell
  }
} as const
