import axios from 'axios'
import qs from 'qs'
import router from '@/routers'
import { Message } from "ant-design-vue/types/message"
import { getStorage } from '@/utils'

const config = {
  baseURL: '',
  transformResponse: [function (data) {
    return data
  }],
  paramsSerializer: (params) => {
    return qs.stringify(params)
  },
  timeout: 5000,
  withCredentials: false,
  responseType: 'json',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: 2000,
  validateStatus: (status) => {
    return status >= 200 && status < 510
  }
}

const service = axios.create(config)
// http请求拦截器
service.interceptors.request.use(config => {
  const token = getStorage('authToken')
  if (token) {
    config.headers.common.Authorization = 'Bearer ' + token
  }
  return config
}, error => {
  Message.error({message: '加载超时'})
  return Promise.reject(error)
})


// http响应拦截器
service.interceptors.response.use(response => {
  if (response.status === 401) {
    Message({
      type: "error",
      showClose: false,
      message: '未授权，请重新登录',
      duration: 1500,
      onClose: function () {
        router.push('/Login')
      }
    })
    return
  }
  return response
}, error => {
  if (error && error.response) {
    if (error.response.status === 400) {
      error.message = '错误请求'
    } else if (error.response.status === 401) {
      error.message = '未授权，请重新登录'
    } else if (error.response.status === 403) {
      error.message = '拒绝访问'
    } else if (error.response.status === 404) {
      error.message = '请求错误，未找到该资源'
    } else if (error.response.status === 405) {
      error.message = '请求方法为允许'
    } else if (error.response.status === 408) {
      error.message = '请求超时'
    } else if (error.response.status === 500) {
      error.message = '服务端错误'
    } else if (error.response.status === 501) {
      error.message = '网络未实现'
    } else if (error.response.status === 502) {
      error.message = '网络错误'
    } else if (error.response.status === 503) {
      error.message = '服务不可用'
    } else if (error.response.status === 504) {
      error.message = '网络超时'
    } else if (error.response.status === 505) {
      error.message = 'http版本不支持该请求'
      error.message = `连接错误${error.response.status}`
    } else {
      error.message = `连接错误${error.response.status}`
    }
  } else {
    error.message = '网络出现问题，请稍后再试'
  }
  Message.error({message: error.message})

  return Promise.reject(error)

})

export default service
