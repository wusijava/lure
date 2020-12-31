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
export async function orderList(params){
    const result = await axios.post(api.order.orderList,params);
    return result;
}
export async function showProductState(params){
    const result = await axios.post(api.order.showProductState,params);
    return result;
}
export async function monitorRecord(params){
    const result = await axios.post(api.order.monitorRecord,params);
    return result;
}
export async function changeState(params){
    const result = await axios.post(api.order.changeState,params);
    return result;
}
export async function deleteRow(params){
    const result = await axios.post(api.order.deleteRow,params);
    return result;
}
export async function myTask(params){
    const result = await axios.post(api.order.myTask,params);
    return result;
}
export async function receiveWork(params){
    const result = await axios.post(api.order.receiveWork,params);
    return result;
}

export async function myAddress(params){
    const result = await axios.post(api.order.address,params);
    return result;
}

export async function remind(params){
    const result = await axios.post(api.order.remind,params);
    return result;
}
export async function deleteRec(params){
    const result = await axios.post(api.order.deleteRec,params);
    return result;
}