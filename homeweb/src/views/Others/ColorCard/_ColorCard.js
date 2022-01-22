// @vue/component

export default {
    name: 'ColorCard',

    components: {},

    mixins: [],

    props: {},

    data () {
        return {
            currentType: null,
            currentTitle: '',
            colorList: []
        }
    },

    computed: {},

    watch: {},

    created () {
        this.currentType = this.$route.query.type ?? ''
        let colorsData = []
        switch (this.currentType) {
            case 'cncolors':
                colorsData = require(`../../../assets/files/cncolors.json`)
                break
            case 'jpcolors':
                colorsData = require(`../../../assets/files/jpcolors.json`)
                break
            default:

        }
        this.colorList = colorsData
    },

    methods: {
        backPressed(){
            this.$router.back()
        }
    }
}
