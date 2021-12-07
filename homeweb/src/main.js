import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ArcoVue from '@arco-design/web-vue'; // https://arco.design/vue/docs/start
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ArcoVue, {
    // 用于改变使用组件时的前缀名称
    componentPrefix: 'arco'
})
app.mount('#app')
