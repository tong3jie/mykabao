import Vue from 'vue';
import Router from 'vue-router';
import exchange from '@/components/exchange/exchange';
import drawing from '@/components/drawing/drawing';
import my from '@/components/my/my';
import set from '@/components/set/set';
import password from '@/components/password/password';
import orderlist from '@/components/orderlist/orderlist';
import protcal from '@/components/protcal/protcal';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: '/?',
  routes: [{
    path: '/',
    name: 'exchange',
    component: exchange,
  }, {
    path: '/drawing',
    name: 'drawing',
    component: drawing,
  }, {
    path: '/my',
    name: 'my',
    component: my,
  }, {
    path: '/set',
    name: 'set',
    component: set,
  }, {
    path: '/password',
    name: 'password',
    component: password,
  }, {
    path: '/orderlist',
    name: 'orderlist',
    component: orderlist,
  }, {
    path: '/protcal',
    name: 'protcal',
    component: protcal,
  }],
});
