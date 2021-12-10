<!--
 * @Author: your name
 * @Date: 2021-12-08 17:32:49
 * @LastEditTime: 2021-12-10 17:14:57
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /homeweb/src/views/Projects/Projects.vue
-->
<template>
    <div class="Projects">
      <div class="base-view">
        <div class="content-view">
          <div class="content-view-desc">
              <div class="content-view-desc-appstore">打开个人 App Store 首页</div>
          </div>
          <CollectionView class="work-base-view" v-if="person.length > 0" title="Projects x 个人小项目" :itemList="person" itemWidth=250></CollectionView>
          <div style="width:100%;height:5px;box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.1);"></div>
          <CollectionView class="work-base-view" v-if="work.length > 0" title="Projects x 参与开发项目" :itemList="work" itemWidth=250></CollectionView>
        </div>
        <div style="position:absolute;left:0px;top:0px;width:100%;height:1px;box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.1);"></div>
      </div>
    </div>
</template>

<script src="./_Projects.js" lang="js"></script>
<style lang="scss" scoped>
@import "./_Projects.scss";
</style>
