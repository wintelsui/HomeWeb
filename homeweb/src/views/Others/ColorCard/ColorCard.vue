<template>
    <div class="ColorCard">
      <div class="navigation-bar-normal navigation-bar-inner" style="background: linear-gradient(to right, rgb(252, 70, 107), rgb(63, 94, 251)); ">
        <div class="navigation-bar-left-item">
          <div class="navigation-bar-item" style="justify-content: flex-start;" @click="backPressed">
            <icon-left size="32" strokeLinejoin="round" style="color: #FFFFFF;"/>
          </div>
        </div>
        <div class="navigation-bar-middle-item navigation-bar-middle-item-inner">
          <span class="navigation-bar-title">{{currentTitle}}</span>
        </div>
        <div class="navigation-bar-right-item"></div>
      </div>
      <div class="base-view">
        <div class="navigation-bar-fake"></div>
        <div style="height: 1970px">
          <h1>ColorCard</h1>
        </div>
      </div>
    </div>
</template>

<script src="./_ColorCard.js" lang="js"></script>

<style lang="scss" scoped>
  @import "./_ColorCard.scss";
</style>
