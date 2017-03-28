import Vue from 'vue'
import Router from 'vue-router'

//引入页面
import fcc from '@/components/fcc'
import zzfcc from '@/components/zzfcc'
import us from '@/components/us'
import code from '@/components/code'
import join from '@/components/join'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: fcc
    },
    {
      path: '/fcc',
      name: 'fcc',
      component: fcc
    },
    {
      path: '/zzfcc',
      name: 'zzfcc',
      component: zzfcc
    },
    {
      path: '/us',
      name: 'us',
      component: us
    },
    {
      path: '/code',
      name: 'code',
      component: code
    },
    {
      path: '/join',
      name: 'join',
      component: join
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
