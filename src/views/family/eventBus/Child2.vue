<template>
  <div>
    <h3>Greeting to you, I am Bob</h3>
    <p>Alice said to me: {{ aliceMessage }}</p>
    <p>
      Bob said: I don't know. <b-button size="sm" variant="success" @click="abc">reply to Alice</b-button>(여기를 구현해
      보도록 하자.)
    </p>
  </div>
</template>

<script>
import { EventBus } from './eventBus'
export default {
  data() {
    return {
      aliceMessage: '',
      count: 0
    }
  },
  created() {
    EventBus.$on('aliceSaid', message => {
      this.aliceMessage = message
    })
  },
  methods: {
    abc: function () {
      this.count += 1
      EventBus.$emit('bobSaid', `abc x ${this.count}`)
    }
  }
}
</script>

<style lang="scss" scoped></style>
