<!--
 * @author: wintelsui
 * @Description: 
 * @Version: 
 * @Author: wintelsui
 * @LastEditors: wintelsui
-->
<template>
    <div class="AppNavigationBar">
      <template v-for="(item, index) in tabs" :key="index" style="display: flex">
        <router-link :to="item.path" replace>{{ item.nameZH }}</router-link>
        <div class="space" v-if="index < tabs.length - 1"> | </div>
      </template>
    </div>
</template>

<script>
    let tabsData = require('../../assets/files/homeTabbar.json')
    export default {
      name: 'Appnavigationbar',

      data () {
        return {
          tabs: [],
        }
      },
      created () {
        this.getTabs()
      },
      methods: {
        getTabs(){
          this.tabs = tabsData ?? ''
        }
      }
    };
</script>

<style lang="scss" scoped>
@import "./_AppNavigationBar.scss";
</style>