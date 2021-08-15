//mock主要用來後端api尚未開發完成，用來模擬回應與api介接的資料，以供前端程式測試。
const MockAdapter = require("axios-mock-adapter");
const setmock = axios => {
    const mock = new MockAdapter(axios);
    mock.onPost("https://abc/login").reply((config) => {
        return [
            200,
            {
                state: true,
                message: '',
                loginuser: {
                    //學號
                    userid: '1234567890',
                    username: '顏大鈞',
                    //webapi授權碼
                    key: '1234567',
                    //是否預約
                    reserve: false,
                    //預約日及區段
                    reserveday: '7/1 09:00-10:00',
                    //預約號碼
                    reservenumber: 12345
                }
            }
        ];
    });

}

export { setmock }