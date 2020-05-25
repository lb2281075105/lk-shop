import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// 1.全局使用fastclick
import FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

// 2.引入全局的样式
// import './style/common.less'
import '@/style/common.less'

// 3.引入全局UI组件库-vant
import './plugins/vant'

// 5.引入rem
import '@/config/rem'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
