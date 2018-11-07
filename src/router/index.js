import Vue from 'vue'
import Router from 'vue-router'

import StartGate from '../view/StartGate.vue'
import Main from '../view/Main.vue'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            name: StartGate,
            path: '/',
            component: StartGate
        }, {
            name: Main,
            path: '/main',
            component: Main
        }
    ]
})