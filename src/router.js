import { createRouter, createWebHistory } from 'vue-router';
import Modal from './components/ModalApp.vue'

const routes = [
    {
        path: `${window.location.pathname}#ModalApp`,
        name: 'modal',
        component: Modal,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
