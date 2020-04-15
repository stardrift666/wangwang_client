import axios from 'axios'

export function request(config) {
    //创建axios实例
    const instance =axios.create({
    baseURL:'http://192.144.227.168:8089',
    timeout:5000
    })
    //发送真正的网络请求
    return instance(config) 
} 