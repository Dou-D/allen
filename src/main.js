import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'
import './api/mock'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,store,
  render: h => h(App),
}).$mount('#app')
