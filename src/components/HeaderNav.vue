<template>
  <header>
    <nav>
      <v-row class="d-flex align-center">
        <RouterLink to="/">
          <v-img
            :width="200"
            :height="80"
            aspect-ratio="16/9"
            cover
            :src="taxpodLogo"
            class="logo"
          ></v-img>
        </RouterLink>
        <RouterLink to="/" class="nav-text text-lg-h6">Courses</RouterLink>
        <RouterLink to="/about" class="nav-text text-lg-h6">About</RouterLink>
        <RouterLink to="/community" class="nav-text text-lg-h6">Community</RouterLink>
        <RouterLink to="/contact" class="nav-text text-lg-h6">Contact Us</RouterLink>
      </v-row>
      <v-col class="d-flex align-center flex-0">
        <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          hide-details
          single-line
          width="250"
          class="mr-8 white"
        ></v-text-field>
        <v-btn
          class="text-h6 text-md-h5 float-right mr-12"
          elevation="4"
          icon="mdi-account"
          size="small"
        ></v-btn>
      </v-col>
    </nav>
  </header>
</template>

<script>
import taxpodLogo from '@/assets/taxpod-logo-2.png'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const search = ref('')

export default {
  name: 'YourComponent',
  data() {
    return {
      taxpodLogo
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-image: linear-gradient(135deg, #6794f1 0, #063389 40%);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}

.logo::before {
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 26px;
  z-index: -1;
  background-color: #fff;
  transform: skew(-26deg);
}

.logo {
  display: block;
  position: relative;
}

.logo img {
  width: 150px !important;
  object-fit: contain !important;
  padding-left: 26px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0;
  display: flex;
  justify-content: start;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
  padding: 0;
}

nav a:first-of-type:hover {
  border: 0;
  padding-left: 0;
  background-color: transparent;
}
</style>
