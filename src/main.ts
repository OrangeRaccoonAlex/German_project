import { createApp } from 'vue'
import './styles/style.css'
import './styles/variables.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import HelloWorld from "./components/HelloWorld.vue";
import MainCardBox from "./pages/MainCardBox.vue";

// TODO доделать навигацию
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: 'Home', path: '/', component: HelloWorld },
        { name: 'Answers', path: '/answers', component: MainCardBox },
    ],
})

createApp(App).use(router).mount('#app')
