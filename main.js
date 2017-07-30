// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import { WechatPlugin } from 'vux';
import App from './App';
import router from './router/index';
import store from './store';

FastClick.attach(document.body);
Vue.use(WechatPlugin);
Vue.config.productionTip = false;

// Vue.wechat.config({
//   debug: true,
//   appId: 'wxc3b56b84fd69effe',
//   nonceStr: 'mykabao',
//   jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
// });

// console.log(this.$store.state);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App,
  },
});
