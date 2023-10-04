import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import router from "@/router";
import axios from "axios"
Vue.prototype.axios = axios
Vue.use(Vuetify)

const vuetify = new Vuetify()

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
})


