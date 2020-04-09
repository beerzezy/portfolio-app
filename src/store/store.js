import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: 'xxx'
    },
    mutations: {
        getMenu(state) {
            console.log('token >>> ', statetoken)
        }
    }
})