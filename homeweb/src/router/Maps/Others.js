const OtherRoutes = [
    {
        path: '/others',
        name: 'Others',
        component: () => import('../../views/Others/Others.vue')
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: () => import('../../views/Calendar/Calendar.vue')
    },
    {
        path: '/colorCard',
        name: 'ColorCard',
        component: () => import('../../views/Others/ColorCard/ColorCard.vue')
    }

]

export default OtherRoutes
