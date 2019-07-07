import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vueAgile'
import App from './App.vue'
import router from './router'
import store from './store'
import style from './style/main.scss'
import normalize from 'normalize.css'

Vue.config.productionTip = false
Vue.use([
  normalize,
  style
])

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
