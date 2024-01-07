import { createRouter, createWebHistory } from 'vue-router';
import ModalApp from "./components/ModalApp.vue";

const routes = [
    {
        path: `${window.location.pathname}#modal`,
        name: 'modal',
        component: ModalApp,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;