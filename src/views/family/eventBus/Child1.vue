<template>
  <div>
    <h3>Hi, I am Alice</h3>
    <p>I said: Hey Bob. where's my stuff??</p>
    <b-button size="sm" variant="primary" @click="whatIsaid">send to Bob</b-button>
    <p>Bob said: {{ bobMessage }}</p>
  </div>
</template>

<script>
import { EventBus } from './eventBus'
// 안적어주면 원하는대로 부를수있음
// {}을 쓰는 순간 안에 있는걸로 불러준다
// export에 적혀진 애만 가능하다
export default {
  data() {
    return {
      bobMessage: '',
      count: 0
    }
  },
  created() {
    EventBus.$on('bobSaid', message => {
      this.bobMessage = message
    })
  },
  methods: {
    whatIsaid: function () {
      this.count += 1
      EventBus.$emit('aliceSaid', `Give me my stuff ! x ${this.count}`)
    }
  }
}
</script>

<style lang="scss" scoped></style>
