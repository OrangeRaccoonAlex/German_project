import { createApp } from 'vue'
import './styles/style.css'
import './styles/variables.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'Home', path: '/home', alias: '/', component: () => import('./pages/Home.vue') },
        { name: 'Questions', path: '/questions', component: () => import('./pages/MainCardBox.vue') },
    ],
})

createApp(App).use(router).mount('#app')
