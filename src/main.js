import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import dotenv from 'dotenv';
// dotenv.config();
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


import 'bootstrap/dist/js/bootstrap.js'