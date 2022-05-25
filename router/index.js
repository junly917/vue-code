import Vue from 'vue'
import VueRouter from 'vue-router'
import sHome from '../views/Home.vue'
import sUser from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', 
        name: 'Home',
        component: sHome,
    },
    {
        path: '/user',
        name: 'User',
        component: sUser,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router