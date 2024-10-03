<template>
  <v-row class="mb-8 d-flex flex-column justify-center align-center first-row">
    <v-card
      class="d-flex flex-column justify-center align-start first-card rounded-0"
      elevation="0"
      color="transparent"
      :image="platformBg"
      width="100%"
    >
      <v-card-title class="text-h5 text-sm-h4 first-card-title">Courses and Webinars</v-card-title>
      <!-- <v-card-text class="text-justify course-subtitle text-subtitle-1">
            For individuals and businesses navigating the complexities of taxation, staying informed is
            essential. Our <b>TaxPOD</b> to provide comprehensive insights into the latest tax laws,
            strategies, and compliance requirements. Whether you're a tax professional looking to
            sharpen your skills or a business owner seeking to better understand tax obligations, our
            offerings cover a wide range of topics tailored to your needs. Join our expert-led sessions
            to stay up-to-date on tax regulations, explore practical case studies, and gain actionable
            knowledge to optimize your financial planning and decision-making.
          </v-card-text> -->
    </v-card>
  </v-row>
  <v-container class="pt-0">
    <v-col width="100%" class="pa-0">
      <v-card width="100%" class="sort-card" elevation="0">
        <v-select
          class="float-right pt-2"
          width="150"
          variant="outlined"
          density="compact"
          color="black"
          bg-color="white"
          v-model="sortOrder"
          :items="['Latest', 'Earliest', 'Upcoming', 'Past']"
          label="Sort by"
          :menu-props="{ closeOnContentClick: true }"
        ></v-select>
      </v-card>
    </v-col>
    <v-row class="pb-6" transition="fade-transition">
      <v-col v-for="course in paginatedCourses" :key="course.id" cols="12" sm="6" md="4">
        <v-card
          class="py-6 cursor-pointer position-relative h-100"
          elevation="3"
          @click="trackClick"
        >
          <v-card-title>{{ course.title }}</v-card-title>
          <v-chip-group column class="pl-3">
            <v-chip
              v-for="tag in course.tags"
              :key="tag"
              color="black"
              density="comfortable"
              size="small"
              class="mr-1 mb-1 text-caption"
              >{{ tag }}</v-chip
            >
          </v-chip-group>
          <v-card-text>{{ course.description }}</v-card-text>
          <v-row class="d-flex flex-row align-center justify-start pl-3 pt-4 pb-3">
            <v-card-subtitle class="d-flex flex-row align-center">
              <v-icon color="#1976D2" icon="mdi-calendar" start></v-icon
              >{{ formatDate(course.date) }}</v-card-subtitle
            >
            <v-card-subtitle class="d-flex flex-row align-center">
              <v-icon icon="mdi-clock-outline" start></v-icon> {{ course.timing }}
            </v-card-subtitle>
          </v-row>
          <v-chip
            class="position-absolute top-0 right-0 mt-2 me-2"
            :color="course.status === 'Upcoming' ? 'blue' : 'red'"
            size="small"
            >{{ course.status }}</v-chip
          >
        </v-card>
      </v-col>
    </v-row>
    <v-pagination v-model="page" rounded="circle" :length="pages" color="black"></v-pagination>
  </v-container>
</template>

<script>
import platformBg from '@/assets/platform-light-bg.jpg'
import courses from '@/data/courses.json'
import { useHead } from '@vueuse/head' // Import useHead for meta handling
export default {
  setup() {
    useHead({
      title: 'Comprehensive Online Tax Courses & Webinars | Learn Tax Preparation & Compliance',
      meta: [
        {
          name: 'description',
          content:
            'Learn essential tax skills with our comprehensive online tax courses. From tax preparation and planning to corporate taxation and compliance, our courses are designed for professionals and individuals alike. Get certified and enhance your expertise with practical, up-to-date tax knowledge.'
        },
        {
          name: 'keywords',
          content:
            'Online tax courses, Corporate tax webinars, Continuing education in taxation, Tax training for professionals, Income tax courses'
        },
        {
          property: 'og:title',
          content:
            'Master Taxation with Our Online Tax Courses & Webinars - Tax Preparation, Planning, and Compliance'
        },
        {
          property: 'og:description',
          content:
            'Master tax concepts and boost your career with our online tax courses. Whether you are a business owner or finance professional, our flexible courses cover everything from tax planning to compliance, with expert guidance and real-world applications.'
        },
        {
          property: 'og:image',
          content: 'src/assets/og-image.png'
        }
        // {
        //   property: 'og:url',
        //   content: 'https://your-site.com/courses'
        // }
      ]
    })
  },
  data() {
    return {
      courses,
      selectedCategory: 'All',
      page: 1,
      itemsPerPage: 6,
      //   categories: ['All', 'Course', 'Webinar'],
      sortOrder: null, // Default sort order
      platformBg
    }
  },
  computed: {
    filteredCourses() {
      let filtered = this.courses.filter((course) => {
        // Filter by selected category
        return this.selectedCategory === 'All' || !this.selectedCategory
          ? true
          : course.category === this.selectedCategory
      })

      // Apply sorting logic
      if (this.sortOrder === 'Latest') {
        filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by latest
      } else if (this.sortOrder === 'Earliest') {
        filtered = filtered.sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by earliest
      } else if (this.sortOrder === 'Upcoming') {
        filtered = filtered.filter((course) => course.status === 'Upcoming') // Show only upcoming courses
      } else if (this.sortOrder === 'Past') {
        filtered = filtered.filter((course) => course.status === 'Past') // Show only past courses
      }

      return filtered // Return filtered courses based on selected criteria
    },

    paginatedCourses() {
      const start = (this.page - 1) * this.itemsPerPage
      const end = this.page * this.itemsPerPage
      return this.filteredCourses.slice(start, end) // Paginate the filtered (and possibly sorted) courses
    },

    pages() {
      return Math.ceil(this.filteredCourses.length / this.itemsPerPage)
    }
  },
  watch: {
    sortOrder() {
      this.page = 1 // Reset to the first page when sorting order changes
    }
  },
  methods: {
    formatDate(date) {
      const d = new Date(date)
      const day = String(d.getDate()).padStart(2, '0')
      const month = String(d.getMonth() + 1).padStart(2, '0') // Months are 0-based
      const year = d.getFullYear()
      return `${day}-${month}-${year}`
    },
    track() {
      this.$gtag.pageview({ page_path: '/' })

      this.$gtag.pageview('/')

      this.$gtag.pageview(this.$route)
    },
    trackClick() {
      this.$gtag.event('latest_click', {
        event_category: 'assessment',
        event_label: 'Lates Button Clicked',
        value: 1
      })
    }
  }
}
</script>
<style scoped>
.first-card {
  padding: 2vw 0;
  position: relative;
}

.first-card::before {
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

.first-card-title {
  position: relative;
  z-index: 1;
  color: white;
  padding-left: 165px;
}

.sort-card {
  max-width: 1200px;
}

@media screen and (max-width: 1080px) {
  .first-card-title {
    padding-left: 50px;
  }
}
</style>
