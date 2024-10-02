<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
import HeaderNavMobile from './components/HeaderNavMobile.vue'
import { useDisplay } from 'vuetify' // Import Vuetify composable
import FooterCourse from './components/FooterCourse.vue'

// Get display properties
const { mdAndUp } = useDisplay() // `mdAndUp` returns true for screen sizes `md`, `lg`, `xl`

// Computed property to check if the screen is desktop size
const isDesktop = computed(() => mdAndUp.value)
</script>

<template>
  <v-app>
    <div class="wrapper">
      <template v-if="isDesktop">
        <HeaderNav />
      </template>
      <template v-else>
        <HeaderNavMobile />
      </template>
      <RouterView />
    </div>
    <FooterCourse />
  </v-app>
</template>
