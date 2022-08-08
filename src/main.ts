import { createApp } from 'vue'
import './style.css'
import 'nprogress/nprogress.css'
import 'virtual:windi.css'
import App from './App.vue'
import router from './router'

import piniaStore from './stores'
// 注册 svg-icons
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router)
app.use(piniaStore)
app.mount('#app')
