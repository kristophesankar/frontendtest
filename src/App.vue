<template>
  <div id="app">
    <MainSection />
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
  }

  /* mobile - most cases */
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    .sidenav {
      width:100%;
      top: 70vh;
      height:30vh;
    }

    .title {
      position: fixed;
      text-align: center;
      width: 100%;
      height: 30px;
      background-color: black;
      margin-top: 0px;
      padding-top:10px;
    }

    .event-history {
      margin-top: 40px !important;
      background: #eee;
      padding: 10px;
      margin: 10px;
    }

    .main-section {
      margin-right: 0px;
    }

    .board {
      border: 10px solid gray;
      text-align: center;
      width: 40vh;
      height: 40vh;
      margin: auto;
      padding: 1px;
      border-radius: 10px;
      margin-top: 20px;
    }
  }

  /* ipad pro */
  @media only screen and (width: 1024px) and (height: 1366px) {
    .sidenav {
      width:100%;
      top: 60vh;
    }

    .main-section {
      margin-left: 0px;
    }

    .board {
      border: 10px solid gray;
      text-align: center;
      width: 40vh;
      height: 40vh;
      margin: auto;
      padding: 1px;
      border-radius: 10px;
      margin-top: 20px;
    }
  }
</style>
