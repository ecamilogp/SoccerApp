import './assets/Style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/index.ts'

const app = createApp(App)

app.use(router)

app.mount('#app')
