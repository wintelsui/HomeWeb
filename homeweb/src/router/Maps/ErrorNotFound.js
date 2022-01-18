const Error404Routes = [
    {
        path: '/404',
        name: '404',
        component: () => import('../../views/NotFound/NotFound.vue')
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404'
    }
]

export default Error404Routes
