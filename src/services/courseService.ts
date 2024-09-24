import axios from 'axios'
import type { AboutCourse, BuyCourseNow, Course, CourseSection } from '@/types'

axios.defaults.baseURL = 'http://localhost:8000'

export const fetchCourses = async (): Promise<Course[]> => {
  const { data } = await axios.get<Course[]>('/courses')
  return data
}

export const fetchBuyCourseNow = async (id: string): Promise<BuyCourseNow> => {
  const { data } = await axios.get<BuyCourseNow>(`/buyCourseNow/${id}`)
  return data
}

export const fetchAboutCourse = async (courseId: string): Promise<AboutCourse> => {
  const { data } = await axios.get<AboutCourse>(`/aboutCourse/${courseId}`)
  return data
}

export const fetchCourseSections = async (id: string): Promise<CourseSection> => {
  const { data } = await axios.get<CourseSection>(`/courseSections/${id}`)
  return data
}
