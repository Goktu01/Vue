import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/Home.vue'
import About from '../view/About.vue'
import Log from '../components/Log.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/log',
        name: 'Log',
        component: Log,
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.name !== 'Log' && localStorage.getItem("userid") === null) {
        console.log("adwa")
        next({ name: 'Log' })
    }
    else next();
});
export default router