<template>
  <div class="board">
    <span v-for="row in rows.length" v-bind:key="row">
      <span v-for="col in cols.length" v-bind:key="col">
        <div
          v-if="(row+col)%2===0"
          class="white"
          v-bind:id="cols[col-1]+rows[row-1]"
          @click="toggleClass">
          {{ row === 8 ? cols[col-1] : '' }}
          {{ col === 1 ? rows[row-1] : '' }}
        </div>
        <div
          v-else
          v-bind:id="cols[col-1]+rows[row-1]"
          class="black"
          @click="toggleClass">
          {{ row === 8 ? cols[col-1] : '' }}
          {{ col === 1 ? rows[row-1] : '' }}
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

        if(this.previous !== ''){
          document.getElementById(this.previous).classList.toggle('overlay')
        }

        event.target.classList.toggle('overlay')
        this.previous = event.target.id;
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
        previous: '',
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
    width: 70vh;
    height: 70vh;
    margin: auto;
    margin-top: 20px;
  }

  .white {
    background-color: #e8e9d1;
    height: 12.5%;
    width: 12.5%;
    color: #527097;
    max-height: 100vw;
    max-width: 100vw;
    float: left;
    padding: 0;
    margin: auto;
  }

  .black {
    background-color: #527097;
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
    background-color: #B0C1D7;
    box-sizing: border-box;
    border: 1px solid #586d95;
    z-index: 999999;
  }
</style>
