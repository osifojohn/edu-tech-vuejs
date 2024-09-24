import axios from 'axios'
import type { AboutCourse, BuyCourseNow, Course, CourseSection } from '@/types'

const BASE_URL = 'http://localhost:8000'

export const fetchCourses = async (): Promise<Course[]> => {
  const { data } = await axios.get<Course[]>(`${BASE_URL}/courses`)
  return data
}

export const fetchBuyCourseNow = async (id: string): Promise<BuyCourseNow> => {
  const { data } = await axios.get<BuyCourseNow>(`${BASE_URL}/buyCourseNow/${id}`)
  return data
}

export const fetchAboutCourse = async (courseId: string): Promise<AboutCourse> => {
  const { data } = await axios.get<AboutCourse>(`${BASE_URL}/aboutCourse/${courseId}`)
  return data
}

export const fetchCourseSections = async (id: string): Promise<CourseSection> => {
  const { data } = await axios.get<CourseSection>(`${BASE_URL}/courseSections/${id}`)
  return data
}
