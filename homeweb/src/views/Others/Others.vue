<template>
    <div class="Others">
      <div class="base-view">
        <div class="content-view">
          <div v-for="(item, index) in otherListData['allKey']" :key="index" style="width: 100%;">
            <TableViewHeader :item="item"/>

            <div v-for="(elItem, elIndex) in otherListData[otherListData['allKey'][index]['aKey']]" :key="elIndex" style="width: 100%;" @click="tableViewSelected(elItem)">
              <div class="table-item-row">
                <div class="table-item-row-content">
                  <span class="table-item-row-title">
                    {{ elItem.name }}
                  </span>
                  <icon-right style="color:#F2F3F5;"/>
                </div>
                <div class="table-item-row-underline"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script src="./_Others.js" lang="js"></script>

<style lang="scss" scoped>
@import "./_Others.scss";
</style>