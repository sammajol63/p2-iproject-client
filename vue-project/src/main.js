import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login';

import App from './App.vue'
import router from './router/app'

// import './assets/main.css'
// import '../style.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(({store})=> {
    store.$router = markRaw(router)
})

app.use(vue3GoogleLogin, {
    clientId:
      '773050852250-t5t5ag9rd0qj74ld9j6sdfqmlgh0ms4m.apps.googleusercontent.com',
  });   
app.use(pinia)
app.use(router)

app.mount('#app')
