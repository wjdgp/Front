<template>
  <div>
    <h1>Emit Test</h1>
    <h2>I am Parent</h2>
    <p>I have to do something for my children.</p>
    <p style="font-weight: bold">I will {{ todo }}</p>
    <div style="border: 1px solid red">
      <alice @updateTodo="updateTodo($event)" />
    </div>
    <div style="border: 1px solid blue">
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
      // newTodo = 'give to Alice money'
      this.todo = newTodo
    }
  }
}
</script>

<style lang="scss" scoped></style>
