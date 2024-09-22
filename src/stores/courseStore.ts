import { defineStore } from 'pinia'
import axios from 'axios'

export interface Course {
  id: number
  title: string
  description: string
  image: string
  instructor: string
  progress: number
  rating: number
  studentsEnrolled: number
  duration: string
}

export interface CourseDetail {
  id: number
  title: string
  description: string
  image: string
  instructor: string
  content: string
  rating: number
  duration: string
}

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
    }
  }),
  actions: {
    async fetchCourses() {
      this.coursesData.loading = true
      this.coursesData.error = null
      try {
        const { data } = await axios.get('http://localhost:8000/courses')
        this.coursesData.items = data
      } catch (error) {
        this.coursesData.error = 'Error fetching courses'
      } finally {
        this.coursesData.loading = false
      }
    },
    async fetchCourseDetail(id: number) {
      this.courseDetailData.loading = true
      this.courseDetailData.error = null
      try {
        const { data } = await axios.get(`http://localhost:8000/courses/${id}`)
        this.courseDetailData.item = data
      } catch (error) {
        this.courseDetailData.error = 'Error fetching course details'
      } finally {
        this.courseDetailData.loading = false
      }
    }
  },
  getters: {
    allCourses: (state) => state.coursesData.items,
    courseDetails: (state) => state.courseDetailData.item,
    isCoursesLoading: (state) => state.coursesData.loading,
    isCourseDetailLoading: (state) => state.courseDetailData.loading,
    getCoursesError: (state) => state.coursesData.error,
    getCourseDetailError: (state) => state.courseDetailData.error
  }
})
