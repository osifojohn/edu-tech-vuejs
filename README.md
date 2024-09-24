# **Edu-Tech Frontend**

This project is a dynamic, responsive web application for an education platform, built using **Vue 3**, **TypeScript**, **TailwindCSS**, and **Pinia** for state management. The application interacts with a mock API to fetch and display course data, ensuring a seamless user experience.

## **Table of Contents**

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Future Improvements](#future-improvements)
- [Author](#author)

## **Project Overview**

The Edu-Tech frontend application dynamically fetches and displays the following information:

- A list of available courses.
- Detailed information about individual courses, including syllabus and instructor details.

## **Key Features**

- **Dynamic Course Listing:** Fetches and displays a list of courses from the mock API.
- **Course Detail View:** Provides detailed information about each course.
- **Responsive Design:** Optimized for mobile, tablet, and desktop screens.
- **Loading State Handling:** Displays a loading spinner while data is being fetched.
- **Error Handling:** Shows error messages if data fetching fails.
- **State Management:** Utilizes Pinia for state management of all fetched data.

## **Technologies Used**

- **Vue 3**
- **TypeScript**
- **TailwindCSS**
- **Pinia**

## **Setup Instructions**

To set up and run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/osifojohn/edu-tech-vuejs.git
cd edu-tech
```

### 2. Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Start the Mock API Server

The JSON Server runs on port `8000` to serve the mock data for courses:

```bash
npm run server
```

### 4. Start the Vue Development Server

To start the development server for the Vue.js frontend:

```bash
npm run dev
```

The frontend will run at `http://localhost:3000/`.

## **API Endpoints**

The application uses the following mock API endpoints to fetch data dynamically:

- `GET /courses`: Fetches a list of all available courses.

### _Due to the extensive content in the single course details page, fetching all information in a single request may not be performant. Instead, I opted to break the data into multiple endpoints to enhance performance and facilitate reusability across different parts of the application._

- `GET /buyCourseNow/{id}`: Fetches purchase information for a specific course by ID.
- `GET /aboutCourse/{courseId}`: Fetches detailed information about a specific course (e.g., instructor bio, rating, course category, number of enrolled students, course description, etc.).
- `GET /courseSections/{id}`: Fetches the course sections and syllabus data.

These endpoints are used in the store (Pinia) to manage and display data across the application.

## **Project Structure**

```
src-directory/
├── assets/           # Contains images, fonts, and other static assets
├── components/       # Reusable Vue components
├── lib/              # Library functions and utilities
├── router/           # Vue Router configuration and navigation
├── stores/           # State management using Pinia
├── types/            # Type definitions for TypeScript
├── views/            # Vue components representing different pages
├── App.vue           # Main application component
├── db.json           # Mock API data with json-server
├── main.ts           # Entry point for the application
└── vue-shim.d.ts     # TypeScript declaration for Vue files
```

## **Future Improvements**

- Complete pages under construction.

## **Author**

[Osifo John](https://github.com/osifojohn)

Feel free to explore, contribute, or raise issues!
