// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'

Vue.use(Vuex)

//引入VueMaterial
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)

//定义VueMaterial主题
Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'red',
    warn: 'red'
  },
  indigo: {
    primary: 'indigo',
    accent: 'pink'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
