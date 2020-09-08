import axios from '../config/axios'
import api from './'

export async function taoList(params){
    const result = await axios.post(api.order.taoList,params);
    return result;
}

export async function orderDetail(params){
    const result = await axios.post(api.order.detail,params);
    return result;
}
export async function taoDetail(params){
    const result = await axios.post(api.order.taoDetail,params);
    return result;
}



