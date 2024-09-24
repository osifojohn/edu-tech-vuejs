import { defineStore } from 'pinia'
import {
  fetchCourses,
  fetchBuyCourseNow,
  fetchAboutCourse,
  fetchCourseSections
} from '@/services/courseService'
import type { AboutCourse, BuyCourseNow, Course, CourseDetail, CourseSection } from '@/types'

export const useCourseStore = defineStore('courseStore', {
  state: () => ({
    coursesData: {
      items: [] as Course[],
      loading: false,
      error: null as string | null
    },
    courseDetailData: {
      item: null as CourseDetail | null,
      loading: false,
      error: null as string | null
    },
    buyCourseNowData: {
      item: null as BuyCourseNow | null,
      loading: false,
      error: null as string | null
    },
    aboutCourseData: {
      item: null as AboutCourse | null,
      loading: false,
      error: null as string | null
    },
    courseSectionsData: {
      item: null as CourseSection | null,
      loading: false,
      error: null as string | null
    }
  }),
  actions: {
    async fetchCourses() {
      this.coursesData.loading = true
      this.coursesData.error = null
      try {
        this.coursesData.items = await fetchCourses()
      } catch (error) {
        this.coursesData.error = 'Error fetching courses'
      } finally {
        this.coursesData.loading = false
      }
    },

    async fetchBuyCourseNow(id: string) {
      this.buyCourseNowData.loading = true
      this.buyCourseNowData.error = null
      try {
        this.buyCourseNowData.item = await fetchBuyCourseNow(id)
      } catch (error) {
        this.buyCourseNowData.error = 'Failed to fetch course purchase data.'
      } finally {
        this.buyCourseNowData.loading = false
      }
    },

    async fetchAboutCourse(courseId: string) {
      this.aboutCourseData.loading = true
      this.aboutCourseData.error = null

      try {
        this.aboutCourseData.item = await fetchAboutCourse(courseId)
      } catch (error) {
        this.aboutCourseData.error = 'Failed to fetch course details.'
      } finally {
        this.aboutCourseData.loading = false
      }
    },

    async fetchCourseSections(id: string) {
      this.courseSectionsData.loading = true
      this.courseSectionsData.error = null

      try {
        this.courseSectionsData.item = await fetchCourseSections(id)
      } catch (error) {
        this.courseSectionsData.error = 'Failed to fetch course sections.'
      } finally {
        this.courseSectionsData.loading = false
      }
    }
  },
  getters: {
    allCourses: (state) => state.coursesData.items,
    isCoursesLoading: (state) => state.coursesData.loading,
    getCoursesError: (state) => state.coursesData.error,

    courseDetails: (state) => state.courseDetailData.item,
    isCourseDetailLoading: (state) => state.courseDetailData.loading,
    getCourseDetailError: (state) => state.courseDetailData.error,

    buyCourseNow: (state) => state.buyCourseNowData.item,
    isBuyCourseNowLoading: (state) => state.buyCourseNowData.loading,
    getBuyCourseNowError: (state) => state.buyCourseNowData.error,

    aboutCourse: (state) => state.aboutCourseData.item,
    isAboutCourseLoading: (state) => state.aboutCourseData.loading,
    getAboutCourseError: (state) => state.aboutCourseData.error,

    courseSections: (state) => state.courseSectionsData.item,
    isCourseSectionsLoading: (state) => state.courseSectionsData.loading,
    getCourseSectionsError: (state) => state.courseSectionsData.error
  }
})
