import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BackGround from './components/HomePage/BackGround.vue'
createApp(App).use(router,BackGround ).mount('#app')
