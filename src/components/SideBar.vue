<template>
  <div id="sidenav" class="sidenav">
    <div class="title">Move History</div>
    <div class="event-history" v-if="boardClicks.length > 0">
      <span v-for="event of boardClicks" v-bind:key="event.id">
        {{
          `Time: ${event.createDateTime.getHours()}:
          ${event.createDateTime.getMinutes()}:
          ${event.createDateTime.getSeconds()}`
        }}<br>
        {{ `Move: ${event.location}` }}<br><br>
      </span>
    </div>
    <div v-else class="event-history" >no moves played...</div>
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
    right: 0;
    float:right;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    border: solid 4px #ccc;
  }

  .title {
    font-weight: bold;
    color: white;
    margin-top: 20px;
  }

  .event-history {
    margin-top: 10px;
    background: #eee;
    padding: 10px;
    margin: 10px;
  }
</style>