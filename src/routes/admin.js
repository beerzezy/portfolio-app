module.exports = {
    path: '/Admin',
    name: 'Admin',
    component: () => import("@/LayOut.vue"),
    children: [
        {
            path: 'Home',
            name: 'AdminHome',
            component: () => import('@/views/Admin/Home.vue')
        }
    ]
}