<!--
 * @author: wintelsui
 * @Description: 
 * @Version: 
 * @Author: wintelsui
 * @LastEditors: wintelsui
-->
<template>
  <div class="collection-item-view">
    <div class="collection-base-view">

      <div class="item-content-view">
        <div class="item-content-label" v-if="item.desc.length > 0">
          <span class="item-content-label-title">应用描述:</span>
          <span class="item-content-label-content">{{ item.desc }}</span>
        </div>
        <!-- <div class="item-content-label" v-if="item.platform != 0">
          <span class="item-content-label-title">平台:</span>
          <div class="item-content-label-content-icons">
            <img class="item-content-label-content-icon" v-if="item.platform == 1 || item.platform == 3 || item.platform == 5" src="../../assets/icon_iOS.png"><img>
            <img class="item-content-label-content-icon" v-if="item.platform == 2 || item.platform == 3" src="../../assets/icon_macOS.png"><img>
            <img class="item-content-label-content-icon" v-if="item.platform == 4 || item.platform == 5" src="../../assets/icon_android.png"><img>
          </div>
        </div> -->
        <div class="item-content-label" v-if="item.duty.length > 0">
          <span class="item-content-label-title">工作职责:</span>
          <span class="item-content-label-content">{{ item.duty }}</span>
        </div>
      </div>

      <div class="line"></div>

      <div class="item-icon-view">
        <img class="item-icon" :src="item.icon" />
        <div class="item-title-view">
          <span class="item-title">{{ item.name }}</span>
          <div class="item-title-view-platforms">
            <!-- platform 1: iOS, 2: macOS, 3: iOS+macOS, 4: Android, 5: iOS+Android -->
            <img class="item-content-label-content-icon" v-if="item.platform == 1 || item.platform == 3 || item.platform == 5" src="../../assets/icon_iOS.png"><img>
            <img class="item-content-label-content-icon" v-if="item.platform == 2 || item.platform == 3" src="../../assets/icon_macOS.png"><img>
            <img class="item-content-label-content-icon" v-if="item.platform == 4 || item.platform == 5" src="../../assets/icon_android.png"><img>
          </div>
          <div class="item-title-view-actions">
              <a
            class="item-title-open"
            :href="item.homepage_current"
            :hidden="item.homepage_current.length == 0"
            >首页</a
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
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "CollectionItemS2View",
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
@import "./CollectionItemS2View.scss";
</style>

