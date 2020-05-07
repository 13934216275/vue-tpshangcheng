import Vue from 'vue'
import App from './App.vue'
import elementUI from 'element-ui'
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import router from './router'
import store from './store'
import 'u-reset.css'
import vCharts from 'v-charts'
// 富文本
import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor);
import VueUeditorWrap from 'vue-ueditor-wrap'
Vue.config.productionTip = false;
Vue.use(elementUI);
Vue.use(echarts);
Vue.component('vue-ueditor-wrap', VueUeditorWrap);
Vue.use(vCharts);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
