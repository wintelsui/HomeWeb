/*
 * @author: wintelsui
 * @Description: 
 * @Version: 
 * @Author: wintelsui
 * @LastEditors: wintelsui
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ArcoVue, {
    // 用于改变使用组件时的前缀名称
    componentPrefix: 'arco'
});
app.use(ArcoVueIcon);
app.mount('#app')

let tabsData = require('./assets/files/homeTabbar.json') //首页的 Tabbar
router.beforeEach((to, from, next) => {
    console.log(`beforeEach from: ${from.name} to: ${ to.name }`)
    console.log(`beforeEach from: ${from.fullPath} to: ${ to.fullPath }`)
    let fullPath = to.fullPath.split('?')[0];
    let isTabbarPage = false;
    for (let tabsDataKey in tabsData) {
        let item = tabsData[tabsDataKey]
        if (fullPath == item.path) {
            isTabbarPage = true;
            break;
        }
    }

    if( isTabbarPage ) {
        // 首页目录
        store.commit({type: 'updateNavigationBar', height: 44})
    }else{
        store.commit({type: 'updateNavigationBar', height: 0})
    }

    console.log('router.getRoutes:', router.getRoutes())

    if (from.name != to.name) {
        next();
    }
    // next('/login');
})

router.afterEach((to, from) => {
    console.log(`afterEach from: ${from.name} to: ${to.name}`) 
    
})