<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view :style="`height: ${fullHeight - 70}px;`"/>
</template>


<script>
export default{
  name:"Login",
  data () {
    return {
      fullHeight: document.documentElement.clientHeight
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

    }
  },
  mounted () {
    this.get_bodyHeight()
  },
  methods :{
    get_bodyHeight () {//动态获取浏览器高度
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
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
