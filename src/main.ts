import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import "virtual:svg-icons-register"
import SvgIcon from '@/components/SvgIcon/index.vue'

const app = createApp(App)

app.component("svg-icon",SvgIcon)

app.mount('#app')
