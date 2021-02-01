<template>
  <div id="app">
    <Profile />
  </div>
</template>

<script>
import Profile from "@/views/Profile";

export default {
  name: "App",
  components: {
    Profile,
  },
};
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

body {
  margin: 0;
  background: #eee;
}
</style>
