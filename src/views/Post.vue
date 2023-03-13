<template>
  <div>
    <p>{{ message }}</p>
    <button @click="changeMessage1">Click me 1</button>
    <button @click="changeMessage2">Click me 2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, world!'
    }
  },
  methods: {
    changeMessage1() {
      this.message = 'Hi there!'
    },
    changeMessage2() {
      this.message = 'Button 2 clicked!'
    }
  }
}
</script>