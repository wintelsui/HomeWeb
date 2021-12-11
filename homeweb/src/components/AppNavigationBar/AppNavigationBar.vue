<!--
 * @author: wintelsui
 * @Description: 
 * @Version: 
 * @Author: wintelsui
 * @LastEditors: wintelsui
-->
<template>
    <div class="AppNavigationBar">
      <router-link to="/">首页</router-link>
      <div class="space"> | </div>
        <router-link to="/projects">项目</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Appnavigationbar'
    };
</script>

<style lang="scss" scoped>
@import "./_AppNavigationBar.scss";
</style>