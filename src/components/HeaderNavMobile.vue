<template>
  <header>
    <nav>
      <RouterLink to="/">
        <v-img
          :width="200"
          :height="60"
          aspect-ratio="16/9"
          cover
          src="./src/assets/taxpod-logo-2.png"
          class="logo"
        ></v-img>
      </RouterLink>
      <!-- <RouterLink to="/" class="text-h6 text-md-h5 float-right"> </RouterLink> -->
      <!-- <RouterLink to="/about" class="text-h6 text-md-h5">About</RouterLink> -->
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="drawer = !drawer"
        class="white mr-sm-8"
      ></v-app-bar-nav-icon>
      <v-navigation-drawer v-model="drawer" app>
        <v-img
          :width="200"
          :height="60"
          aspect-ratio="16/9"
          cover
          src="./src/assets/taxpod-logo-2.png"
          class="logo-drawer"
        ></v-img>
        <v-col>
          <v-list :items="items" class="drawer-item mt-8"></v-list>
        </v-col>
        <v-btn class="mt-12" variant="outlined" color="black" block size="x-large" elevation="2"
          >Sign In</v-btn
        >
        <v-btn class="mt-4" color="black" block size="x-large" elevation="2">Get Price</v-btn>
      </v-navigation-drawer>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Courses',
        value: 'Courses'
      },
      {
        title: 'About',
        value: 'About'
      },
      {
        title: 'Community',
        value: 'Community'
      },
      {
        title: 'Contact Us',
        value: 'buzz'
      }
    ]
  })
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
  width: 230px !important;
  object-fit: contain !important;
  padding-left: 26px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0;
  display: flex;
  justify-content: space-between !important;
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
  padding-left: 0;
}

nav a:first-of-type:hover {
  border: 0;
  padding-left: 0;
  background-color: transparent;
}
</style>
