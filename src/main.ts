import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// (Optional) Import Vuetify Icon packs
import '@mdi/font/css/materialdesignicons.css'

import { createHead } from '@vueuse/head' // Import vueuse/head
import VueGtag from 'vue-gtag' // Import VueGtag

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

const head = createHead() // Create head manager instance

app.use(vuetify)

app.use(createPinia())
app.use(router)
app.use(head) // Use vueuse/head in the app
app.use(VueGtag, {
  config: { id: 'G-1G7RX8JDLC' } // Replace with your Google Analytics Measurement ID
})

app.mount('#app')
