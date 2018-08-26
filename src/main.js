import Vue from "vue";
import "./style.scss";
import genres from "./util/genres";

new Vue({
  el: "#app",
  data:{
    genre: [], 
    time: []
  },
  methods:{
    checkFilter(category, title, checked){
      if(checked) {
        this[category].push(title)
      } else {
        let index = this[category].indexOf(title);
        if(index > -1 ){
          this[category].splice(index, 1);
        }
      }
    }
  },
  components: {
    "movie-list": {
      template: `<div id="movie-list">               
        <div class="movie" v-for="movie in filteredMovies"> {{ movie.title }} </div>
      </div>`,
      props:['genre', 'time'],
      computed: {
        filteredMovies(){
          return this.movies.filter(this.moviePassesGenreFilter)
        }
      },
      methods: {
        moviePassesGenreFilter(movie) {
          return this.genre.length 
          ? this.genre.find(genre => movie.genre === genre)
          : true
        }
      },
      data() {
        return {
          movies: [
            {
              title: "Fiction",
              genre: genres.ANIMATION 
            },
            {
              title: "home alone",
              genre: genres.COMEDY 

            },
            {
              title: "Austin",
              genre: genres.CRIME 

            }
          ]
        };
      }
    },
    "movie-filter": {
      data() {
        return {
          genres
        };
      },
      template: `
      <div id="movie-filter">
        <h2>Filter results</h2>
        <div class="filter-group">
          <check-filter 
            v-for="genre in genres" 
            v-bind:title="genre"
            v-on:check-filter="checkFilter"> </check-filter>
        </div>
      </div>
      `,
      methods:{
        checkFilter(...args){
          this.$emit('check-filter', ...args)
        }
      },
      components: {
        "check-filter": {
          data() {
            return {
              checked: false
            };
          },
          props: ["title"],
          template: `
            <div 
            v-bind:class="{ 'check-filter' : true , active: checked }" 
            v-on:click="checkFilter" >
              <span class="checkbox"></span>
              <span class="check-filter-title">{{ title }}</span>
            </div>`
          ,
          methods: {
            checkFilter() {
              this.checked = !this.checked;
              this.$emit('check-filter', 'genre', this.title, this.checked);
            }
          }
        }
      }
    }
  },
 
});
