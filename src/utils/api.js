import http from './http';
// 轮播图
export function getIndexBanner(params) {
    return http.get('/home/banner', params)
}
// 推荐列表
export function getRecommendList(params) {
    return http.post('/home/recommend', params)
}
// 分类接口
export function getClassifyList(params) {
    return http.post('/classify', params)
}

// 详情页
export function getDetailInfo(params) {
    return http.post('/detail', params)
}