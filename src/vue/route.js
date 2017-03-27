import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './page/home.vue'
import OtherPage from './page/other.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: HomePage
        },{
            path: '/other',
            name: 'other',
            component: OtherPage
        }
    ]
})