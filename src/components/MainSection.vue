<template>
  <div class="main-section">
    <div><span class="heading">Chess.com Challenge </span>by Arjuna Sankar</div>
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
    margin-right: 200px;
    color: #e8e9d1;
  }

  .heading {
    font-size:32px;
    font-weight: 800;
  }
</style>
