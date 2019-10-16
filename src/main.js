import Vue from 'vue'
import App from './App.vue'
import VConsole from 'vconsole'

Vue.prototype.$vconsole = VConsole;

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
