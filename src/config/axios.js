import axios from 'axios'

const baseURL = 'http://127.0.0.1:8088'

function setHeaders() {
    const header = {}
    header['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
    header['Accept'] = 'application/json'

    if(localStorage.getItem('login_token')) {
        header['authorization'] = localStorage.getItem('login_token')
    }
    return header
}

const myAxios = {
    post: async function(url,param){
        let result = await axios.post(url, param, {
            baseURL: baseURL,
            timeout: 1000 * 15,
            withCredentials: false,
            headers: setHeaders(),
            transformRequest: [function (data) {
                let ret = ''
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret
            }]
        });
        if(!result || result.data.code === 40015){
            localStorage.removeItem('login_token');
            location.href = "/mineCommute";
        }
        return result;
    }
}

export default myAxios
