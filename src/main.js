import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import * as THREE from 'three'

Vue.use(BootstrapVue);
Vue.use({ install (Vue, options) { Vue.prototype.$THREE = THREE }})
new Vue({
    el: '#app',
    render: h => h(App),
    router
})
