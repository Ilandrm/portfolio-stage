import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../view/HomeView.vue';
import EnterPageView from '../view/EnterPageView.vue';
import Contact from '../view/ContactView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'enter',
            component: EnterPageView
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
});

export default router;
