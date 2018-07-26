/*
 * @Author: qiao 
 * @Date: 2018-07-25 10:27:23 
 * @Last Modified by:   qiao 
 * @Last Modified time: 2018-07-25 10:27:23 
 */
import Vue from 'vue';
import Router from 'vue-router';
import VWList from '@/components/VWList/index.vue';

// console.log(Flexible);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VWList',
      component: VWList,
    },
  ],
});
