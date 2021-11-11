import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

//위와 아래의 내용은 같은내용
/*
var App ={
  template : '<div>app</div>'
}

new Vue({
  el:'#app',
  components:{
    'app':App
  }
})
*/
