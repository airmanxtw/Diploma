const axios = require("axios");
//import store from "../plugins/vuex";

//取得登入資訊
const getloginuser = function (user) {
    return new Promise(function (resolve, reject) {
        // axios.get(`${store.getters.apipath}Login`)
        //     .then(function(res){                    
        //         resolve(res);
        //     })
        //     .catch(function (error) {
        //         reject(error);
        //     })

        let res = {
            state: false,
            message: '發生不明錯誤',
            loginuser: {
                userid: user.studno,
                username: '顏大鈞',
                key: '1234567'
            }
        }
        resolve(res);
    })
}

// const getT13=function(keyword){
//     return new Promise(function (resolve, reject) {        
//         axios.get(`${store.getters.apipath}T13`,{params:{keyword:keyword}})
//             .then(function(res){                    
//                 resolve(res);
//             })
//             .catch(function (error) {
//                 reject(error);
//             })
//     })
// }

// const getContest=function(keyword){
//     return new Promise(function (resolve, reject) {        
//         axios.get(`${store.getters.apipath}Contest`,{params:{keyword:keyword}})
//             .then(function(res){                    
//                 resolve(res);
//             })
//             .catch(function (error) {
//                 reject(error);
//             })
//     })
// }

export { getloginuser }
