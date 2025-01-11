import axios from 'axios'
import type { AboutCourse, BuyCourseNow, Course, CourseSection } from '@/types'
import { API_BASE_URL } from '@/lib/constants'

export const fetchCourses = async (): Promise<Course[]> => {
  try {
    const { data } = await axios.get<Course[]>(`${API_BASE_URL}/courses`)
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      throw error.response.data
    }
    throw error
  }
}

export const fetchBuyCourseNow = async (id: string): Promise<BuyCourseNow> => {
  try {
    const { data } = await axios.get<BuyCourseNow>(`${API_BASE_URL}/buyCourseNow/${id}`)
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      throw error.response.data
    }
    throw error
  }
}

export const fetchAboutCourse = async (courseId: string): Promise<AboutCourse> => {
  try {
    const { data } = await axios.get<AboutCourse>(`${API_BASE_URL}/aboutCourse/${courseId}`)
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      throw error.response.data
    }
    throw error
  }
}

export const fetchCourseSections = async (id: string): Promise<CourseSection> => {
  try {
    const { data } = await axios.get<CourseSection>(
      `${API_BASE_URL}-course-section/courseSections/${id}`
    )
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      throw error.response.data
    }
    throw error
  }
}
