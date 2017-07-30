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
import axios from 'axios';


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
  beforeCreate() {
    if (this.$route.query.code) {
      const code = this.$route.query.code;
      const states = this.$route.query.state;
      this.$store.dispatch('LOAD_USERINFO', { code, states });
    }
    axios.post('https://gong.mykabao.cn/websubmit', {
      timestamp: Date.now(),
      url: window.location.href.split('#')[0],
    }).then((res) => {
      if (res.data.resCode === 0) {
        this.$wechat.config({
          dubug: true,
          appId: res.data.result.appId,
          jsApiList: res.data.result.jsApiList,
          nonceStr: res.data.result.nonceStr,
          signature: res.data.result.signature,
          timestamp: res.data.result.timeStamp,
        });
      }
    });
  },
  created() {
    if (this.$route.path === '/') {
      this.tabbarItemIndex = 0;
    } else if (this.$route.path === '/drawing') {
      this.tabbarItemIndex = 1;
    } else if (this.$route.path === '/my') {
      this.tabbarItemIndex = 2;
    } else if (this.$route.path === '/index.html') {
      this.$router.push({ path: '/' });
    }
    // if (window.location.href === this.$store.state.wechatConfig.url) {
    //   this.$wechat.config({
    //     dubug: true,
    //     appId: this.$store.state.wechatConfig.appId,
    //     jsApiList: this.$store.state.wechatConfig.jsApiList,
    //     nonceStr: this.$store.state.wechatConfig.nonceStr,
    //     signature: this.$store.state.wechatConfig.signature,
    //     timestamp: this.$store.state.wechatConfig.timestamp,
    //   });
    // }
  },
  mounted() {
    this.$wechat.ready(() => {
      console.log('ready');
    });
    this.$wechat.error((err) => {
      console.log(err);
    });
  },
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

body {
  background-color: #F4F4F4;
}
</style>
