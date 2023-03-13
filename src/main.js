import {createApp} from 'vue'
import App from './App.vue'

import 'components/SvgIcon/index.js'
import SvgIcon from 'components/SvgIcon/index'

App.component('svg-icon', SvgIcon)

createApp(App).mount('#app')
