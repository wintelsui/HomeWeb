const OtherRoutes = [
    {
        path: '/others',
        name: 'Others',
        component: () => import('../../views/Others/Others.vue'),
        children: [{
            path: '/calendar',
            name: 'Calendar',
            component: () => import('../../views/Calendar/Calendar.vue')
        },
        {
            path: '/colorCard',
            name: 'ColorCard',
            component: () => import('../../views/ColorCard/ColorCard.vue')
        }]
    },

]

export default OtherRoutes
