<template>
  <div id="nav" :style="`height:${navHeight}px;`">
    <Appnavigationbar style="width: 100%; height: 100%"></Appnavigationbar>
  </div>
  <router-view :style="`height: ${contentViewHeight}px;`"/>
</template>


<script>
import Appnavigationbar from "@/components/AppNavigationBar/AppNavigationBar";

export default{
  components: {
    Appnavigationbar
  },
  name:"Login",
  data () {
    return {
      fullHeight: 0,
      navHeight: 0,
      contentViewHeight: 0
    }
  },
  watch: {
    fullHeight (val) {//监控浏览器高度变化
      if(!this.timer) {
        this.fullHeight = val
        this.timer = true
        let that = this
        setTimeout(function (){
          that.timer = false
        },400)
      }

      this.contentViewHeight = this.fullHeight - this.navHeight
    }
  },
  computed: {
    // contentViewHeight() {
    //   return this.fullHeight - this.navHeight
    // }
  },
  mounted () {
    this.fullHeight = this.$store.state.screen.height
    this.navHeight =  this.$store.state.navigationBar.height

    this.get_bodyHeight()
  },
  methods :{
    get_bodyHeight () {//动态获取浏览器高度
      const weakThis = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          window.fullWidth = document.documentElement.clientWidth

          weakThis.fullHeight = window.fullHeight
          weakThis.$store.commit({
            type: 'updateScreen',
            width : window.fullWidth,
            height : window.fullHeight
          })
        })()
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 70px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
