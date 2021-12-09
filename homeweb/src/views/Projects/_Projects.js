// @vue/component
// import axios from "axios";
let projectsData = require('../../assets/projects.json')
export default {
    name: 'Projects',

    components: {},

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

        }
    }
}
