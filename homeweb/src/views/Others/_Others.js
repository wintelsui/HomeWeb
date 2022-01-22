// @vue/component

import TableViewHeader from "@/components/TableViewHeader";
let otherListCacheDatas = require('../../assets/files/othersList.json')
export default {
    name: 'Others',

    components: {TableViewHeader},

    mixins: [],

    props: {},

    data () {
        return {
            otherListData: {}
        }
    },

    computed: {
    },

    watch: {},

    created () {
        this.otherListData = otherListCacheDatas;
        console.log(this.otherListData)
    },

    methods: {
        tableViewSelected(item){
            if (item.path?.length > 0) {
                this.$router.push({ path: item.path, query: item.query})
            }
        }
    }
}
