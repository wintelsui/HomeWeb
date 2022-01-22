<template>
  <div class="table-header">
    <span class="table-header-title">
      {{ item.name }}
    </span>
  </div>
</template>
<script lang="js">
export default {
  name: 'TableViewHeader',
  props: {
    item: {}
  }
}
</script>

<style lang="scss" scoped>

.table-header {
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;

  .table-header-title {
    margin-left: 14px;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>