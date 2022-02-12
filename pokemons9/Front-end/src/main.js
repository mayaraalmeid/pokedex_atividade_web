import { createApp } from 'vue'
import App from './App.vue'
import router from './rotas'
import { store, axios } from './store'

app.config.globalProperties.axios = axios;


createApp(App).use(store).use(router).mount('#app')
