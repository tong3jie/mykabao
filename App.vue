<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
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
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux';

export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem,
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

body {
  background-color: #F4F4F4;
}
</style>
