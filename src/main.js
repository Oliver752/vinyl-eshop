import '@mdi/font/css/materialdesignicons.css';

import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
const vuetify = createVuetify({
        components,
        directives,
    })

app.use(vuetify)


app.use(pinia)

app.use(router)

app.mount('#app')
