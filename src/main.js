import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/js/bootstrap.js'