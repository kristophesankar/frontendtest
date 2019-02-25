<template>
  <div class="board">
    <span v-for="row in rows.length" v-bind:key="row">
      <span v-for="col in cols.length" v-bind:key="col">
        <div
          v-if="(row+col)%2===0"
          class="white"
          v-bind:id="cols[col-1]+rows[row-1]"
          @click="toggleClass">
        </div>
        <div
          v-else
          v-bind:id="cols[col-1]+rows[row-1]"
          class="black"
          @click="toggleClass">
        </div>
      </span>
    </span>
  </div>
</template>

<script>
  import { generateUID } from "../utils/utils.js";

  export default {
    name: 'Chessboard',
    methods: {
      toggleClass: function(event){
        event.target.classList.toggle('overlay')
        let arr = this.$store.getters.boardClicks
        const clickEvent = {
          id: generateUID(),
          createDateTime: new Date(),
          location: event.target.id
        }
        arr.push(clickEvent)
        this.sortEvents(arr)
        this.$store.commit('change', arr)
      },
      sortEvents: function () {
        return this.$store.getters.boardClicks.sort((a,b) => {
          return new Date(b.createDateTime) - new Date(a.createDateTime)
        })
      }
    },
    data() {
      return {
        isActive: false,
        cols: ['A','B','C','D','E','F','G','H'],
        rows: ['8','7','6','5','4','3','2','1'],
      }
    }
  }
</script>

<style>
  .board {
    border: 10px solid gray;
    text-align: center;
    width: 80vh;
    height: 80vh;
    margin: auto;
    padding: 1px;
    border-radius: 10px;
    margin-top: 20px;
  }

  .white {
    background-color: white;
    height: 12.5%;
    width: 12.5%;
    max-height: 100vw;
    max-width: 100vw;
    float: left;
    padding: 0;
    margin: auto;
  }

  .black {
    background-color: black;
    height: 12.5%;
    width: 12.5%;
    max-height: 100vw;
    max-width: 100vw;
    float: left;
    padding: 0;
    margin: auto;
    color: white;
  }

  .overlay{
    background-color: #2ce6a1;
    box-sizing: border-box;
    border: 1px solid black;
    z-index: 999999;
  }
</style>
