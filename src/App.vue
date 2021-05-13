<template>
  <div id="app">
    <LessonComponent />
  </div>
</template>

<script>
import LessonComponent from './components/LessonComponent.vue'

export default {
  name: 'App',
  components: {
    LessonComponent,
 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
