<template>
  <div id="movie-list">  
    <div class="no-results" v-if="!filteredMovies.length && movies.length">
     No Movies were found for <span v-for="genra in genre"> {{ genra }} </span>
    </div>     
    <movie-item
      v-bind:movie="movie.movie"
      v-for="movie in filteredMovies"
      v-bind:key="movie.id"
      v-bind:sessions="movie.sessions"
      v-bind:day="day"
    />
    <div v-if="!filteredMovies.length && !movies.length">
     Loading...
    </div>
  </div>
</template>

<script>
  import MovieItem from './MovieItem.vue';
  export default {
    props: ['genre', 'time', 'movies', 'day'],
    computed: {
      filteredMovies(){
        return this.movies.filter(this.moviePassesGenreFilter)
      }
    },
    methods: {
      moviePassesGenreFilter({movie}) {
        if(!this.genre) return true;
        let show = true;
        this.genre.forEach(genre => {
          if(movie.Genre.indexOf(genre) === -1) show = false;
        })
        return show;
      }
    },
    components: {
      MovieItem
    }
  }

</script>

