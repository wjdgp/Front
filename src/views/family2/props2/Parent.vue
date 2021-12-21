<template>
  <div>
    <h1>Props Test</h1>
    <h2>I am Parent</h2>
    <p>I will make my children do something</p>
    <div style="border: solid 1px red">
      <alice job="homework" :user="myAlice" />
    </div>
    <div style="border: solid 1px blue">
      <bob job="clean my room" />
    </div>
  </div>
</template>

<script>
import Alice from './Child1.vue'
import Bob from './child2.vue'

export default {
  components: {
    Alice,
    Bob
  },
  data() {
    return {
      myAlice: {
        name: 'Alice',
        who: 'My daugher'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
