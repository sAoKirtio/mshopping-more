let baseURL

switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api'
    break
  case 'production':
    baseURL = 'http://mall-mall-pre.springboot.cn/api'
    break
  case 'kirito':
    baseURL = 'http://kirito-mall-pre.springboot.cn/api'
    break
  default:
    baseURL = 'http://mall-mall-pre.springboot.cn/api'
    break;
}

export default {
  baseURL
}