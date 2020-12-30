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