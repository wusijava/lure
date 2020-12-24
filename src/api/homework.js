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