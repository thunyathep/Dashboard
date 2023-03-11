import { createApp } from 'vue'
import App from './App.vue'
import './Firebase.js'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

//app.use(BootstrapVue3)
createApp(App).use(router).use(BootstrapVue3).mount('#app')