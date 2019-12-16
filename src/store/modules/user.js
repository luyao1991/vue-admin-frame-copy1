/* eslint-disable camelcase */
// userStore

import Api from '@/http/api.js'

const state = {
  userInfo: {
    name: 'yangon'
  }, // 用户信息 id name avater sex access
  message: {} // 消息
}

// getters key: (state, getters, rootState, rootGetters) => {}
const getters = {
  // 消息未读、已读、回收站的数量
  // messageUnreadCount: state => state.messageUnreadList.length,
  // messageReadedCount: state => state.messageReadedList.length,
  // messageTrashCount: state => state.messageTrashList.length
}

// mutations
const mutations = {
  dataReset (state) { // 数据重置
    state.userInfo = {}
    state.message = {}
  },
  setUser (state, user) {
    state.userInfo = user
  },
  setMessage (state, { message }) {
    state.message = message
  },
  setToken (state, { token }) {
    state.token = token
  }
}

// actions
const actions = {
  // 登录
  setUserInfo ({ commit }, user) {
    commit('setUser', user)
  },
  handleLogin ({ commit }, { form }) {
    return new Promise((resolve, reject) => {
      resolve(form)
    })
  },
  // 退出登录
  handleLogOut ({ state, commit }) {
    return new Promise((resolve, reject) => {
      Api({ url: 'logout', method: 'post' }).then(() => {
        commit('dataReset')
        commit('setToken', { token: '' })
        resolve()
      }).catch(err => {
        reject(err)
      })
      // 如果你的退出登录无需请求接口，则可以直接使用下面几行代码而无需使用logout调用接口
      // commit('dataReset')
      // resolve()
    })
  },
  // 获取用户相关信息
  getUserInfo ({ state, commit }) {
    return new Promise((resolve, reject) => {
      Api.get('get_info').then((resp) => { // 请求成功
        if (resp.code === 200) {
          commit('setUser', { user: resp.data })
        }
        resolve(resp)
      }).catch((error) => { // 请求失败
        reject(error)
      })
    })
  },
  // 获取消息列表，其中包含未读、已读、回收站三个列表
  getMessageList ({ state, commit }) {
  },
  // 根据当前点击的消息的id获取内容
  getContentByMsgId ({ state, commit }, { msg_id }) {
  },
  // 把一个未读消息标记为已读
  signReaded ({ state, commit }, { msg_id }) {
  }
  // ...
}

export default {
  namespaced: true, // 根据模块注册的路径调整命名
  state,
  getters,
  actions,
  mutations
}
