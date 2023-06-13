import {createApp} from 'vue'
import App from './App.vue'
//import '@/assets/svg'  // 导入图标资源
import './SvgIcon/index.js'
import SvgIcon from './SvgIcon/index'
import JsonViewer from "@/components/json-viewer.vue";

createApp(App)
    .component('svg-icon', SvgIcon)
    .component(JsonViewer.name, JsonViewer)
    .mount('#app')
