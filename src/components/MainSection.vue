<template>
  <div class="main-section">
    <h1>Chess.com Challenge</h1>
    <p>click the squares to record your moves...</p>
    <Chessboard />
  </div>
</template>

<script>
  import Chessboard from "./Chessboard.vue"
  export default {
    name: 'MainSection',
    components: {
      Chessboard,
    },
  }
</script>

<style>
  .main-section {
    margin-left: 200px;
  }
</style>
