<template>
  <div class="main-section">
    <h1>Chessboard</h1>
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
