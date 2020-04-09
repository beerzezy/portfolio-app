import Vue from 'vue'
import Router from 'vue-router'
import Admin from './routes/admin'
import User from './routes/user'

Vue.use(Router)

const routes = {
    mode: "history",
    routes: [
        { 
            path: '*',
            redirect: '/Home'
        },
        // {
        //     path: '/Home',
        //     name: 'Home',
        //     component: () => import('@/components/auth/Login')
        // },
        {
            path: '/Home',
            name: 'Home',
            component: () => import('@/views/User/Home')
        },
        Admin,
        //User
    ]
}

export default new Router(routes)