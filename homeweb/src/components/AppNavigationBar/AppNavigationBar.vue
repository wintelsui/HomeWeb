<template>
    <div class="AppNavigationBar">
      <router-link to="/">Home</router-link>
      <div class="space"> | </div>
        <router-link to="/projects">Projects</router-link>
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