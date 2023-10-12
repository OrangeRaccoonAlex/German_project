import { createApp } from 'vue'
import './styles/style.css'
import './styles/variables.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// TODO доделать навигацию
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'Home', path: '/home', component: () => import('./pages/Home.vue') },
        { name: 'Answers', path: '/answers', component: () => import('./pages/MainCardBox.vue') },
    ],
})

createApp(App).use(router).mount('#app')
