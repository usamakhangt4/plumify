import { createApp } from 'vue'
import App from '../src/App.vue'
// import router from './router'
import store from './store/index'

const app = createApp(App)

// app.use(router)
app.use(store)

app.mount('#app')