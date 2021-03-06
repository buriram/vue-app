import Vue from 'vue'

export const state = () => ({
  online: false,
  drawer: false,
  user: {},
  students: [],
})

export const mutations = {
  setOnline(state, status) {
    state.online = status
  },
  setDrawer(state, status) {
    state.drawer = status
  },
  setUser(state, user) {
    state.user = user
  },
  setStudents(state, data) {
    state.students = data
  },
}

export const actions = {
  async loadStudents(store) {
    // 1. โหลดข้อมูลเก่าจาก localStorage ก่อน
    let students = JSON.parse(window.localStorage.getItem('students') || '[]')
    // 2 commit
    store.commit('setStudents', students)

    // 3. ยิง api เพื่อข้อมูลใหม่จาก server
    let res = await Vue.axios.post('/student/', { room: '2', year: 3 })

    // 4. commit
    store.commit('setStudents', res.data)
    // 5. เก็บลง localStorage
    window.localStorage.setItem('students', JSON.stringify(res.data))
  },
  loadUser(store) {
    let user = window.sessionStorage.getItem('user')
    if (!user) {
      return false
    }
    store.commit('setUser', JSON.parse(user))
    return true
  },
}
