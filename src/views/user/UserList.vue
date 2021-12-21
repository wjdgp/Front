<template>
  <div>
    <h1>Store Test</h1>
    <div>
      <h3>User List</h3>
      <b-button variant="primary" @click="searchUserList">Search</b-button>
      <div style="border: solid 1px red">
        {{ userList }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userList() {
      return this.$store.getters.userList
    }
  },
  methods: {
    searchUserList() {
      this.$store.dispatch('actUserList', this.searchParams)
      // 검색 조건을 넘겨 준다
      // $store = store에 있는걸 쓸수있다
      // dispatch = actions
      // context = actUserList
      // this.searchParams = payload
      // dispatch 이름이 겹치면안된다
    }
  }
}
</script>

<style lang="scss" scoped></style>
