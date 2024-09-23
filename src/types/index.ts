export type Course = {
  id: number
  title: string
  description: string
  image: string
  instructor: Instructor
  progress: number
  rating: Ratings
  studentsEnrolled: number
  duration: string
}

export type AboutCourse = {
  courseId: string
  title: string
  category: string
  ratings: Ratings
  studentsEnrolled: number
  instructor: Instructor
  description: string
  price: CoursePrice
}

export type Ratings = {
  average: number
  totalRatings: number
}

export type Instructor = {
  name: string
  qualifications?: string
  ratings: Ratings
}

export type BuyCourseNow = {
  courseId: string
  videoUrl: string
  courseTitle: string
  onDemandVideo: string
  downloadableResources: number
  access: string[]
  articles: number
  codingExercises: number
  certificateOfCompletion: boolean

  price: CoursePrice
}

export type CoursePrice = {
  currentPrice: number
  originalPrice: number
  discount: string
}

export type CourseDetail = {
  id: number
  title: string
  description: string
  image: string
  instructor: string
  content: string
  rating: number
  duration: string
}

export type LessonType = 'video' | 'document' | 'quiz'

export type Lesson = {
  title: string
  duration?: string
  type: LessonType
  completed: boolean
  videoUrl?: string
  pdfUrl?: string
  questions?: number
}

export type Section = {
  week: number
  title: string
  lessons: Lesson[]
}

export type CourseSection = {
  id: string
  totalSectionNumber: number
  numbersOfLecture: number
  totalLengthDuration: string
  purchasedByMe: boolean
  sections: Section[]
}
