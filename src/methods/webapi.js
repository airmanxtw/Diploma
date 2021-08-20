const axios = require("axios");

const mock = require("methods/mocks");
mock.setmock(axios);

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.get['header1'] = 'value';
    debugger;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    debugger;
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

//取得登入資訊
const getloginuser = function (user) {
    return new Promise(function (resolve, reject) {
        axios.post(`https://abc/login`, user)
            .then(function (res) {
                resolve(res);
            })
            .catch(function (error) {
                reject(error);
            })
    })
}

//取得日期
const getdays = function (key) {
    return new Promise(function (resolve, reject) {
        // axios.get(`${store.getters.apipath}Login`)
        //     .then(function(res){                    
        //         resolve(res);
        //     })
        //     .catch(function (error) {
        //         reject(error);
        //     })

        let res = {
            data: [
                { text: '7月1日', value: '2021/7/1' },
                { text: '7月2日', value: '2021/7/2' },
            ]
        }
        resolve(res);
    })
}

//取得區段
const getregions = function (day) {
    return new Promise(function (resolve, reject) {
        // axios.get(`${store.getters.apipath}Login`)
        //     .then(function(res){                    
        //         resolve(res);
        //     })
        //     .catch(function (error) {
        //         reject(error);
        //     })

        let res = {
            data: [
                { text: '09:00-10:00', value: 1, disabled: false },
                { text: '10:00-11:00', value: 2, disabled: false },
                { text: '11:00-12:00', value: 3, disabled: false },
                { text: '14:00-15:00', value: 4, disabled: true },
                { text: '15:00-16:00', value: 5, disabled: true },
                { text: '16:00-17:00', value: 6, disabled: true },
                { text: '19:00-20:00', value: 7, disabled: true },
                { text: '20:00-21:00', value: 8, disabled: true },
            ]
        }
        resolve(res);
    })
}

//預約
const addreserve = function (key, day, region) {
    return new Promise(function (resolve, reject) {
        // axios.get(`${store.getters.apipath}Login`)
        //     .then(function(res){                    
        //         resolve(res);
        //     })
        //     .catch(function (error) {
        //         reject(error);
        //     })

        let res = {
            data: {
                state: true,
                message: '',
                reserve: true,
                //預約日及區段
                reserveday: '7/1 09:00-10:00',
                //預約號碼
                reservenumber: 12345
            }
        }
        resolve(res);
    })
};

//取消預約
const clearreserve = function (key) {
    return new Promise(function (resolve, reject) {
        // axios.get(`${store.getters.apipath}Login`)
        //     .then(function(res){                    
        //         resolve(res);
        //     })
        //     .catch(function (error) {
        //         reject(error);
        //     })

        let res = {
            data: {
                state: true,
                message: '',
                reserve: false,
                //預約日及區段
                reserveday: '',
                //預約號碼
                reservenumber: null
            }
        }
        resolve(res);
    })
};

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

export { getloginuser, getdays, getregions, addreserve, clearreserve }
