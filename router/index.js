import Vue from 'vue';
import Router from 'vue-router';
import exchange from '@/components/exchange/exchange';
import drawing from '@/components/drawing/drawing';
import my from '@/components/my/my';
import set from '@/components/set/set';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
  }],
});
