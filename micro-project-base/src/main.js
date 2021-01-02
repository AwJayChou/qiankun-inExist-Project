import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import startQiankun from './micro/app'
startQiankun()
Vue.use(ant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
