import axios from 'axios'

export function request(config) {
    //创建axios实例
    const instance =axios.create({
    baseURL:'http://210.47.16.56:8080',
    timeout:5000
    })
    //发送真正的网络请求
    return instance(config) 
} 