import Vue from "vue";
import Vuex from "vuex";
import { getRecommendList, getClassifyList, getDetailInfo } from '../utils/api'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recommendList: [],
        detailInfo: {},
        classifyList: []
    },
    mutations: {
        changeRecommendList(state, payload) {
            state.recommendList = payload.list
        },
        changeDetailInfo(state, payload) {
            state.detailInfo = payload.info
        },
        getClassifyList(state, payload) {
            state.classifyList = payload.list
        }
    },
    actions: {
        async getRecommend({ commit }, payload) {
            const result = await getRecommendList(payload)
            commit('changeRecommendList', {
                list: result.result.list
            })
        },
        // 商品详情
        async getDetailInfo({ commit }, payload) {
            const result = await getDetailInfo({
                productId: payload.id
            })
            commit('changeDetailInfo', {
                info: result.result
            })
        },
        // 分类页
        async getClassifyList({ commit }, payload) {
            console.log(payload.type)
            const result = await getClassifyList({
                type: payload.type
            })
            commit('getClassifyList', {
                list: result.result
            })
        }
    },
    modules: {}
});