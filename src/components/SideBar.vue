<template>
  <div id="sidenav" class="sidenav">
    <span class="title">Chess.com</span><br>
    <span class="title-break">Front-End Challenge</span>
    <div class="event-history">
      <span><b>Move History</b></span><br>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SideBar',
  data: function () {
    return {
      boardClicks: this.$store.getters.boardClicks
    }
  },
}
</script>

<style>
  .sidenav {
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    border: solid 4px #ccc;
  }

  .title {
    font-weight: bold;
    color: white;
  }

  .title-break {
    font-weight: bold;
    color: white;
    padding: 5px;
  }

  .event-history {
    margin-top: 10px;
    background: #eee;
    padding: 10px;
    margin: 10px;
  }


</style>