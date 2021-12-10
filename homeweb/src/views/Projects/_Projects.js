/*
 * @Author: your name
 * @Date: 2021-12-08 17:32:49
 * @LastEditTime: 2021-12-10 17:02:07
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /homeweb/src/views/Projects/_Projects.js
 */
// @vue/component
// import axios from "axios";
import CollectionView from '../../components/CollectionView/CollectionView.vue';
let projectsData = require('../../assets/projects.json')
export default {
    name: 'Projects',

    components: { 
        CollectionView
    },
    mixins: [],

    props: {},

    data () {
        return {
            person: [],
            work: [],
        }
    },

    computed: {},

    watch: {},

    created () {
        this.getProjects()
    },

    methods: {
        getProjects(){
            this.person = projectsData.person ?? [];
            this.work = projectsData.work ?? [];

            console.log('projects.person:', this.person)
            console.log('projects.work:', this.work)
            // axios.get('../../../assets/projects.json').then((res) => {
            //     //用axios的方法引入地址
            //     this.res=res
            //     //赋值
            //     console.log(res)
            // })

        },
        openAppStore() {
            window.open('https://apps.apple.com/cn/developer/wentao-sui/id1212355458');
        }
    }
}
