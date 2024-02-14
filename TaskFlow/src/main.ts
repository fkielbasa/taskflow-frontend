import './assets/main.css'
import './index.css'
import gAuthPlugin from 'vue3-google-oauth2';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

let gauthClientId = '58725241035-u8qjgakt2or77a3jqo7vdb6pk8kr8thg.apps.googleusercontent.com';
app.use(gAuthPlugin, {
  clientId: gauthClientId,
  scope: 'email',
  prompt: 'consent',
})

app.use(createPinia())
app.use(router)

app.mount('#app')
