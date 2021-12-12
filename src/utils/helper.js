import axios from 'axios'

// 向後端確認後再修正
// const baseURL = 'https://alphitter-api-server.herokuapp.com/api/'
const baseURL = 'https://alphitter-chatroom-api.herokuapp.com/api'
// const baseURL = 'http://localhost:3000/api/'

const axiosInstance = axios.create({
  baseURL
})

axiosInstance.interceptors.request.use(
  (config) => {
    // 取出 token
    const token = localStorage.getItem('token')
    // 如果 token 存在，則寫入 header 設定
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (err) => Promise.reject(err)
)

export const apiHelper = axiosInstance
