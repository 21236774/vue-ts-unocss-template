import { request } from '@/service'

export const getArticle = (): any => {
  return request.get('/api-proxy/zj/all-list')
}
