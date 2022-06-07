import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';  // 全局引入
import 'element-ui/lib/theme-chalk/index.css'; // 全局引入
import router from '../router'

import './assets/less/index.css'  // 引入自定义的css样式
import '../api/mock.js'
import store from '../store'
import http from 'axios'

// import { Button} from 'element-ui';  // 按需引入

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.use(ElementUI) // 全局引入
// Vue.use(Button)  //按需引入

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
