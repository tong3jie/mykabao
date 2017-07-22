<template>
  <div id="app" style="height:100%;">
    <view-box ref="viewBox" body-padding-bottom="55px">
      <router-view></router-view>
      <tabbar slot="bottom">
        <tabbar-item link="/" :selected="this.$route.path === '/'">
          <img slot="icon" src="./assets/drawing.svg">
          <img slot="icon-active" src="./assets/drawed.svg">
          <span slot="label">兑换</span>
        </tabbar-item>
        <tabbar-item link="/drawing" :selected="this.$route.path === '/drawing'">
          <img slot="icon" src="./assets/moneypacking.svg">
          <img slot="icon-active" src="./assets/moneypacked.svg">
          <span slot="label">提现</span>
        </tabbar-item>
        <tabbar-item link="/my" :selected="this.$route.path === '/my'">
          <img slot="icon" src="./assets/i.svg">
          <img slot="icon-active" src="./assets/iselected.svg">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, ViewBox } from 'vux';

export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem,
    ViewBox,
  },
  data() {
    return {
      tabbarItemIndex: 0,
    };
  },
  // methods:{
  //   tabbarItemIndex() {
  //     this.$route.path ==
  //   },
  // },
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
body {
  background-color: #F4F4F4;
}
</style>
