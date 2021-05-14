<template>
  <div class="container">
     <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Lessons</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/user" class="nav-link">User</router-link>
        </li>
      </ul>
    </nav><br />
     <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>

   .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#border_item {
  border: 2px solid #091976d2;
  margin: 5px;
  padding: 5px;
  border-radius: 3px;
}
</style>
