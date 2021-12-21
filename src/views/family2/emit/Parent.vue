<template>
  <div>
    <h1>Emit Test</h1>
    <h2>I am Parent</h2>
    <p>I have to do comething for my children</p>
    <p style="font-weight: bold">I will {{ todo }}</p>
    <div style="border: solid 1px red">
      <alice @updateTodo="updateTodo($event)" />
    </div>
    <div style="border: solid 1px blue">
      <bob @updateTodo="updateTodo($event)" />
    </div>
  </div>
</template>

<script>
import Alice from './Child1.vue'
import Bob from './Child2.vue'

export default {
  components: {
    Alice,
    Bob
  },
  data() {
    return {
      todo: 'do nothing'
    }
  },
  methods: {
    updateTodo: function (newTodo) {
      this.todo = newTodo
    }
  }
}
</script>

<style lang="scss" scoped></style>
