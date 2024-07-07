import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { setupGlobalComponents } from './plugins/component'

const app = createApp(App)

setupGlobalComponents(app);

app.mount('#app')


