<template>
  <div id="sidenav" class="sidenav">
    <div class="title">Move History</div>
    <div class="event-history" v-if="boardClicks.length > 0">
      <span v-for="event of boardClicks" v-bind:key="event.id">

        <span class="moves"> {{ event.location }}</span> at
        {{event.createDateTime.getHours()}}:{{event.createDateTime.getMinutes()}}
        {{ (event.createDateTime.getHours() > 12) ? 'pm' : 'am' }}
        <br><br>
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
    background-color: #e8e9d1;
    overflow-x: hidden;
    transition: 0.5s;
    border: solid 4px #7f7f7f;
  }

  .moves{
    border: solid 1px black;
    padding:5px;
    border-radius: 5px;
    background-color: #B0C1D7;
    font-weight: 600;
  }

  .title {
    font-weight: bold;
    color: white;
    margin-top: 20px;
    width: 100%;
    height: 30px;
    background-color: #527097;
    margin-top: 0px;
    padding-top:10px;
  }

  .event-history {
    margin-top: 10px;
    padding: 10px;
    margin: 10px;
  }
</style>