import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userInfo: {},
    wechatConfig: {
      debug: true,
      appId: 'wxc3b56b84fd69effe',
      nonceStr: 'mykabao',
      jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
    },
  },

  mutations: {
    SET_USERINFO(state, { userInfo }) {
      state.userInfo = userInfo;
    },
    // SET_JSAPI_SIGN(state, { wechatConfig }) {
    //   state.wechatConfig.timestamp = wechatConfig.timeStamp;
    //   state.wechatConfig.url = wechatConfig.url;
    //   state.wechatConfig.signature = wechatConfig.signature;
    // },
  },

  actions: {
    LOAD_USERINFO({
      commit,
    }, {
      code,
      states,
    }) {
      axios.post('https://gong.mykabao.cn/websubmit', {
        code,
        state: states,
      }).then((res) => {
        commit('SET_USERINFO', {
          userInfo: res.data,
        });
      });
    },
    // LOAD_JSAPI_SIGN({ commit }, { wechatConfig }) {
    //   axios.post('https://gong.mykabao.cn/websubmit', {
    //     timestamp: wechatConfig.timestamp,
    //     url: wechatConfig.url,
    //   }).then((res) => {
    //     if (res.data.resCode === 0) {
    //       commit('SET_JSAPI_SIGN', { wechatConfig: res.data.result });
    //     }
    //   });
    // },
  },
});

export default store;
