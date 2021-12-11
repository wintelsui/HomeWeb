<!--
 * @Author: your name
 * @Date: 2021-12-10 13:01:02
 * @LastEditTime: 2021-12-11 23:11:56
 * @LastEditors: wintelsui
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /homeweb/src/components/CollectionView/CollectionView.vue
-->

<template>
  <div class="CollectionView">
   <div class="title-base-view" v-if="title.length > 0">
     <div class="title-label" >{{title}}</div>
   </div>
   <div class="item-base-view" v-if="itemList.length > 0" :style="this.$store.state.screen.width < itemWidth * 2 + 40 ? 'justify-content: space-around;' : ''">
     <CollectionItemView v-for="(item, index) in itemList" :key="index" :item="item" :style="`width:${itemWidth}px;`"></CollectionItemView>
   </div>
  </div>
</template>

<script>
import CollectionItemView from './CollectionItemS2View.vue'
export default {
  name: 'CollectionView',
  components: {
    CollectionItemView
  },
  created() {

  },
  data() {
    return {
    }
  },
  props: {
      title: {
        type: String,
        default: '',
      },
      itemWidth: {
        type: Number,
        default: 100,
      },
      itemList: {
        type: Array,
        // eslint-disable-next-line vue/require-valid-default-prop
        default: [],
      },
  },
  methods: {
   
  },
}
</script>

<style lang="scss" scoped>
@import "./CollectionView.scss";
</style>

