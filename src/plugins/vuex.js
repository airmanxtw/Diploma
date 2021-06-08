import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    loginuser: {
      userid: '',
      username: '',
      key: '',
      reserve: false,
      reserveday: '',
      reservenumber: null
    }
  },
  getters: {
    loginuser: (state => state.loginuser),
    islogin: (state => state.loginuser.key.length > 0 ? true : false),
    username: (state => state.loginuser.username),
  },
  mutations: {
    setloginuser: ((state, user) => { state.loginuser = user }),
    // setapipath:((state,path)=>state.apipath=path),        
  }
});

export default store;

