import Axios, { AxiosError, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

interface Response<T = any> {
  data: T | null
  errDoc: string | null
  responseCode: number
  responseMsg: string
}

const axios = Axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
})

axios.interceptors.request.use((config) => {
  const tokenStorage = sessionStorage.getItem('token')
  config.headers = {
    token: tokenStorage || '',
    ...config.headers,
  }
  return config
})

axios.interceptors.response.use(
  (response: AxiosResponse<Response>) => {
    const { responseCode, responseMsg, data } = response.data
    if (responseCode !== 200) {
      // 错误
      ElMessage.error(responseMsg)
      return Promise.reject(response.data)
    }
    return data
  },
  (error: AxiosError<AxiosResponse>) => {
    ElMessage.error(error.response?.statusText)
    return Promise.reject(error)
  }
)

export default axios
