import Vue from 'vue';
import './style.scss';
import ganres from './util/genres';

new Vue({
  el: '#app',
  components : {
    'movie-list': {
      template: `<div id="movie-list">               
        <div class="movie" v-for="movie in movies"> {{ movie.title }} </div>
      </div>`,
      data() {
        return {
          movies: [
            {
              title: 'Fiction',
            },
            {
              title: 'home alone'
            },
            {
              title: 'Austin'
            }
          ]
        };
      },
    },
    
    'movie-filter': {
      data(){
        return {
          ganres
        }
      },
      template: `
      <div id="movie-filter">
        <h2>Filter results</h2>
        <div class="filter-group">
          <check-filter v-for="ganre in ganres"></check-filter>
        </div>
      </div>
      `,
      components: {
        'check-filter': {
          template: `<div>Filter</div>`
        }
      }

    }
  }
})