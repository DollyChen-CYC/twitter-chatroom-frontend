import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/stylesheets/styles.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import store from './store'
import VueSocketIO from 'vue-socket.io'

// const token = localStorage.getItem('token')

// user Socket.io :
Vue.use(new VueSocketIO({
  debug: true,
  // // connection : Websocket server url or socket.io-client instance
  connection: 'https://alphitter-chatroom-api.herokuapp.com/',
  // connection: ('http://localhost:3000'),
}))

Vue.config.productionTip = false

new Vue({
  // sockets: {
  //   connecting() {
  //     console.log('正在連線')
  //   },
  //   disconnect() {
  //     console.log("Socket 離線")
  //   },
  //   connect_failed() {
  //     console.log('連線失敗')
  //   },
  //   connect() {
  //     console.log('socket connected')
  //   }
  // },
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
