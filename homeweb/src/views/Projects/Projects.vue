<template>
    <div class="Projects">
      <div class="base-view">
        <div class="content-view">
          <div v-for="(item, index) in [1, 2, 3, 4]" :key="index" style="width: 100px; height: 300px">
            {{ item }}
          </div>
          <img src="../../assets/logo.png" />
        </div>
      </div>
    </div>
</template>

<script src="./_Projects.js" lang="js"></script>
<style lang="scss" scoped>
@import "./_Projects.scss";
</style>
