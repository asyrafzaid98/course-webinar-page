# Online Tax Courses and Webinars

## Overview
This project is a web application that provides users with a comprehensive platform to explore and enroll in various online tax courses and webinars. Users can view upcoming and past events, filter by category, and sort by date. The application is built using Vue.js (with Vuetify) and leverages Pinia for state management.

## Features
- **User-Friendly Interface**: Clean and intuitive design for easy navigation.
- **Course Listings**: Display a list of tax courses and webinars with titles, descriptions, and dates.
- **Filtering and Sorting**: Users can sort them by date (Latest, Earliest, Upcoming or Past).
- **Responsive Design**: Fully responsive layout that adapts to both desktop and mobile devices.
- **SEO Optimization**: Meta tags and structured data for better search engine visibility.
- **Analytics Integration**: Google Analytics setup to track user interactions and page visits.

## Tech Stack
- **Frontend**: Vue.js, Vuetify, TypeScript
- **State Management**: Pinia
- **Routing**: Vue Router
- **Styling**: CSS (Vuetify styles)
- **Analytics**: Google Analytics

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/online-tax-courses.git
   cd online-tax-courses


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### API

For the purpose of this project, a mock JSON file is used to simulate loading the list of courses and webinars. You can modify the data in the mockData.json file located in the src/assets/ directory.


### Sample Data Structure

```sh
[
  {
    "id": 1,
    "title": "Intro to Web Development",
    "description": "A beginner’s course on web development.",
    "date": "2024-10-01",
    "category": "Course",
    "status": "upcoming"
  },
  {
    "id": 2,
    "title": "Advanced JavaScript Webinar",
    "description": "Dive deep into JavaScript features and best practices.",
    "date": "2024-08-15",
    "category": "Webinar",
    "status": "past"
  }
]
```


### SEO and Performance 

This project employs SEO best practices using meta tags and structured data. It also implements performance optimization strategies such as lazy loading and pagination.


### Contribution

Contributions are welcome! Feel free to open issues, suggest features, or submit pull requests.


### Acknowledgments
  -  Vue.js
  -  Vuetify
  -  Pinia
  -  Google Analytics


### Contact

For any questions or inquiries, please reach out to:
 - Asyraf Zaid - asy.zaid98@gmail.com
