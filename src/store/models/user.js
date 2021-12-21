import api from '../apiUtil'

export default {
  state: {
    // state에 사용할 모델이나 값을 선언 한다.
    User: {
      // 객체라서 대문자
      id: 0,
      name: null,
      username: null,
      email: null
    }, // User 상세 정보용 state
    UserList: [] // User 리스트용 state
  },
  getters: {
    // getters을 통해 state값을 호출 한다.
    User: state => state.User,
    UserList: state => state.UserList
  },
  mutations: {
    // mutations는 동기적이어야 함.(비동기 사용 불가)
    // 동기라서 set사용
    // (state, data) -> 순서 그대로 유지할것
    setUser(state, data) {
      state.User = data
    },
    setUserList(state, data) {
      state.UserList = data
    }
  },
  actions: {
    // action은 비동기적 사용이 가능하다. (action에서 mutation을 호출하는 방법을 권장함)
    // (context, payload)
    actUserInfo(context, payload) {
      console.log('User.id', payload)

      // const testUsetInfo = {
      //   id: payload,
      //   name: 'test',
      //   username: 'testUSer',
      //   email: 'test@email.com'
      // }
      // context.commit('setUser', testUsetInfo)

      api.get(`https://jsonplaceholder.typicode.com/users/${payload}`).then(response => {
        console.log('response', response)

        const userInfo = response && response.data
        context.commit('setUser', userInfo)
      })
    },
    actUserList(context, payload) {
      console.log('searchParams', payload)
      // payload를 통해 검색 조건을 받아올수있다

      // const testUserList = ['user1', 'user2', 'user3']
      // 이 값을 RestAPI에서 받아오면된다
      // context.commit('setUserList', testUserList)
      // mutation을 통해 UserList값을 세팅한다

      api.get('https://jsonplaceholder.typicode.com/users').then(response => {
        console.log('response', response)

        const userList = response && response.data
        context.commit('setUserList', userList)
      })
    }
  }
}
