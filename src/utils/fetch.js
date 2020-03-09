import axios from 'axios'
// import { Message, Loading } from 'element-ui'
const ConfigBaseURL = 'https://m.maizuo.com' //默认路径，这里也可以使用env来判断环境


//使用create方法创建axios实例
export const fetch = axios.create({
  timeout: 7000, // 请求超时时间
  baseURL: ConfigBaseURL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
// 添加请求拦截器
fetch.interceptors.request.use(config => {
  // loadingInstance = Loading.service({
  //   lock: true,
  //   text: 'loading...'
  // })
  return config
})
// 添加响应拦截器
fetch.interceptors.response.use(response => {
  // loadingInstance.close()
  // console.log(response)
  return response.data
}, error => {
  console.log('TCL: error', error)
  const msg = error.Message !== undefined ? error.Message : ''
  Message({
    message: '网络错误' + msg,
    type: 'error',
    duration: 3 * 1000
  })
  // loadingInstance.close()
  return Promise.reject(error)
})