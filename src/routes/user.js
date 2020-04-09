module.exports = {
    path: '/Company',
    name: 'Company',
    component: () => import("@/LayOut.vue"),
    children: [
        {
            path: 'Home',
            name: 'UserHome',
            component: () => import('@/views/User/Home.vue')
        }
    ]
}