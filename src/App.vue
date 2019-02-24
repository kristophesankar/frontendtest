<template>
  <div id="app">
    <SideBar />
  </div>
</template>

<script>

  import SideBar from "./components/SideBar.vue"
  import MainSection from "./components/MainSection.vue"

  export default {
    name: 'app',
    components: {
      SideBar,
      MainSection,
    }
  }
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Raleway');

  #app {
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
