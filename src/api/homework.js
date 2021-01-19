import axios from '../config/axios'
import api from './'

export async function addHomework(params){
    const result = await axios.post(api.homework.addHomework,params);
    return result;
}

export async function homeworkList(params){
    const result = await axios.post(api.homework.homeworkList,params);
    return result;
}

export async function addHouseWork(params){
    const result = await axios.post(api.homework.addHouseWork,params);
    return result;
}
export async function sendMsg(params){
    const result = await axios.post(api.homework.sendMsg,params);
    return result;
}
export async function saveAdd(params){
    const result = await axios.post(api.homework.saveAdd,params);
    return result;
}
export async function getResult(params){
    const result = await axios.post(api.homework.getResult,params);
    return result;
}
export async function addSsq(params){
    const result = await axios.post(api.homework.addSsq,params);
    return result;
}
export async function faQiDaiMai(params){
    const result = await axios.post(api.homework.faQiDaiMai,params);
    return result;
}
export async function suiJi(params){
    const result = await axios.post(api.homework.suiJi,params);
    return result;
}

export async function getOnlineNum(params){
    const result = await axios.post(api.homework.getOnlineNum,params);
    return result;
}
export async function ssqQuick(params){
    const result = await axios.post(api.homework.ssqQuick,params);
    return result;
}
export async function getHistory(params){
    const result = await axios.post(api.homework.getHistory,params);
    return result;
}
export async function getTi(params){
    const result = await axios.post(api.homework.getTi,params);
    return result;
}
export async function checkTi(params){
    const result = await axios.post(api.homework.checkTi,params);
    return result;
}
export async function dingDing(params){
    const result = await axios.post(api.homework.dingDing,params);
    return result;
}