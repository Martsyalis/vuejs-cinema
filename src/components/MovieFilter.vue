<template>
  <div id="movie-filter">
        <h2>Filter results</h2>
        <!-- <h3>By time of day</h3>
        <div class="filter-group">
          <check-filter 
            v-for="time in times" 
            v-bind:title="time"
            v-on:check-filter="checkFilter"
            v-bind:key="time"
            category="time"
            
          >
          </check-filter>
        </div> -->
        <h3>By genre</h3>
        <div class="filter-group">
          <check-filter 
            v-for="genre in genres" 
            v-bind:title="genre"
            v-bind:key="genre"
            category="genre"
            v-on:check-filter="checkFilter"
          >
          </check-filter>
        </div>
      </div>
</template>

<script>
  import genres from "../util/genres";
  import times from "../util/times";
  import CheckFilter from "./CheckFilter.vue"

  export default {
    props: ['time', 'category'],
    data() {
      return {
        genres,
        times
      };
    },
    methods:{
      checkFilter(...args){
        console.log('in movieFilter');
        this.$emit('check-filter', ...args)
      }
    },
    components: {
      CheckFilter
    }
  }
</script>