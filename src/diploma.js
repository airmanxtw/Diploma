import Vue from 'vue'
import vuetify from 'plugins/vuetify' // path to vuetify export
import store from "plugins/vuex";
import diplomaapp from "component/diplomaapp";
//import {setprototype} from "methods/prototype";

//setprototype();

new Vue({
  vuetify,
  store,
  components:{
    diplomaapp
  }
}).$mount('#app');