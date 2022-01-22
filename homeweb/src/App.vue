<template>
  <div id="nav" :style="`height:${navHeight}px;`">
    <Appnavigationbar style="width: 100%; height: 100%"
                      v-if="navHeight > 0"></Appnavigationbar>
  </div>
  <router-view id="home-router" :style="`height: ${contentViewHeight}px;`" />
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
      // navHeight: 0,
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

      this.reMathContentViewHeight();
    },
    navHeight (val) {
      console.log(`navHeight:(${val})`)

      this.reMathContentViewHeight();
    }
  },
  computed: {
    navHeight() {
      return this.$store.state.navigationBar.height
    }
  },
  mounted () {
    this.fullHeight = this.$store.state.screen.height
    // this.navHeight =  this.$store.state.navigationBar.height

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
    },
    reMathContentViewHeight() {
      this.contentViewHeight = this.fullHeight - this.navHeight
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
  height: 44px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#home-router {
  margin-top: 0px;
}

.navigation-bar-normal {
  width: 100%;
  height: 44px;
  position: absolute;
  left: 0;
  top: 0;
  background: #3b2e7e;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}

.navigation-bar-fake {
  width: 100%;
  height: 44px;
}

.navigation-bar-left-item {
  margin-left: 14px;
  width: 44px;
  height: 44px;
}

.navigation-bar-right-item {
  margin-right: 14px;
  width: 44px;
  height: 44px;
}

.navigation-bar-middle-item {
  height: 44px;
}

.navigation-bar-item {
  height: 44px;
  width: 44px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}

</style>
