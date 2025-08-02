import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      isLoggedIn: false,
      studentId: '',
      username: ''
    },
  products :[
    { 
      id: 1, 
      name: '高等数学第七版 上下册 同济大学 全新未使用', 
      price: 25, 
      category: '书籍', 
      image: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.ytjrozUlZLg2m04OmZoJ1wAAAA?w=206&h=206&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7', 
      date: '2025-05-01',
      college: '计算机学院'
    },
    { 
      id: 2, 
      name: '联想小新Pro13 2020款 i5 16G 512G 2.5K屏', 
      price: 3200, 
      category: '电子产品', 
      image: 'https://tse4-mm.cn.bing.net/th/id/OIP-C._ctoeqUqm8RAmPaTPiWbHAHaJ4?w=150&h=200&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7', 
      date: '2024-12-03',
      college: '信息学院'
    },
    { 
      id: 3, 
      name: '捷安特山地自行车 21速 九成新 送锁和头盔', 
      price: 450, 
      category: '生活用品', 
      image: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.cafq4wY4SmsQOcH4Xr56YAHaE4?w=306&h=201&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7', 
      date: '2025-04-05',
      college: '体育学院'
    },
    { 
      id: 4, 
      name: 'AirPods 2代 无线蓝牙耳机 功能完好 带充电盒', 
      price: 380, 
      category: '电子产品', 
      image: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.LFEMkFvD37OSP9puYImwQgHaFj?w=282&h=211&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7', 
      date: '2024-11-22',
      college: '艺术学院'
    },
    { 
      id: 5, 
      name: 'Nike LeBron 17 篮球鞋 43码 仅试穿 几乎全新', 
      price: 680, 
      category: '服饰', 
      image: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.C_ewfg_op8LgRdvDpCDOFwHaE7?w=284&h=189&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7', 
      date: '2025-05-12',
      college: '体育学院'
    },
    { 
      id: 6, 
      name: 'Yamaha F310 民谣吉他 入门级 送教材和拨片', 
      price: 500, 
      category: '其他', 
      image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.2D4e7yfwTReYjl6ttYTCoAHaDl?w=339&h=169&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7', 
      date: '2025-02-08',
      college: '音乐学院'
    },
    { 
      id: 7, 
      name: '小米LED智能台灯 可调光调色 宿舍必备', 
      price: 80, 
      category: '生活用品', 
      image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.oRSPqsZJiFsaxiWgukAz3QHaHa?w=218&h=217&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7', 
      date: '2025-05-23',
      college: '文学院'
    },
    { 
      id: 8, 
      name: '2023考研英语政治数学全套资料 附笔记', 
      price: 120, 
      category: '书籍', 
      image: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.may_2OsJO0_UNpLNzAYVmgHaHa?w=182&h=181&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7', 
      date: '2025-05-20',
      college: '研究生院'
    }
  ]
  },
  mutations: {
    login(state, user) {
      state.user.isLoggedIn = true
      state.user.studentId = user.studentId
      state.user.username = user.username
    },
    logout(state) {
      state.user.isLoggedIn = false
      state.user.studentId = ''
      state.user.username = ''
    },
    updateUser(state, userData) {
      state.user = {...state.user, ...userData}
    },
    addProduct(state, product) {
      state.products.unshift(product)
      if (product.image instanceof File) {
              product.image = URL.createObjectURL(product.image)
            }
    },
    updateProduct(state, {id, product}) {
      const index = state.products.findIndex(p => p.id === id)
      if (index !== -1) {
        state.products.splice(index, 1, product)
      }
    },
    deleteProduct(state, id) {
          state.products = state.products.filter(p => p.id !== id)
    }
  },
  actions: {
    saveUser({commit}, userData) {
      commit('updateUser', userData)
    },
    createProduct({commit}, product) {
      commit('addProduct', product)
    },
    editProduct({commit}, {id, product}) {
      commit('updateProduct', {id, product})
    },
    removeProduct({commit}, id) {
      commit('deleteProduct', id)
    },
    logout({ commit }) {
      commit('logout')
    }
  },
  modules: {
  }
})