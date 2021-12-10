<!--
 * @Author: your name
 * @Date: 2021-12-10 13:01:02
 * @LastEditTime: 2021-12-10 16:41:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /homeweb/src/components/CollectionView/CollectionItemView.vue
-->

<template>
  <div class="collection-item-view">
    <div class="collection-base-view">
      <div class="item-icon-view">
        <img class="item-icon" :src="item.icon" />
        <div class="item-title-view">
          <span class="item-title">{{ item.name }}</span>
          <a
            class="item-title-open"
            :href="item.homepage_current"
            :hidden="item.homepage_current.length == 0"
            >去首页 ></a
          >
          <div
            class="item-title-download"
            @click="clickDownload"
            :hidden="item.download_url.length == 0"
          >
            <span class="item-title-download-label">下载</span>
          </div>
        </div>
      </div>
      <div class="item-content-view">
        <div class="item-content-label" v-if="item.desc.length > 0">
          <span class="item-content-label-title">描述:</span>
          <span class="item-content-label-content">{{ item.desc }}</span>
        </div>
        <div class="item-content-label" v-if="item.platform != 0">
          <span class="item-content-label-title">平台:</span>
          <span class="item-content-label-content">{{ platformValue }}</span>
        </div>
        <div class="item-content-label" v-if="item.duty.length > 0">
          <span class="item-content-label-title">工作内容:</span>
          <span class="item-content-label-content">{{ item.duty }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollectionItemView",
  created() {
    let platform = this.item.platform;
    if (platform == 1) {
      this.platformValue = "移动端";
    } else if (platform == 2) {
      this.platformValue = "Mac端";
    } else if (platform == 3) {
      this.platformValue = "Mac/移动端";
    } else {
      this.platformValue = "";
    }
  },
  data() {
    return {
      platformValue: ''
    };
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          name: "",
          icon: "",
          desc: "",
          duty: "",
          download_url: "",
          homepage_ori: "",
          homepage_current: "",
          platform: 0
        };
      },
    },
  },
  methods: {
    clickDownload() {
      if (this.item.download_url.length > 0) {
        window.open(this.item.download_url);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./CollectionItemView.scss";
</style>

