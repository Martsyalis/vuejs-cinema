import Vue from "vue";
import "./style.scss";
import ganres from "./util/genres";

new Vue({
  el: "#app",
  components: {
    "movie-list": {
      template: `<div id="movie-list">               
        <div class="movie" v-for="movie in movies"> {{ movie.title }} </div>
      </div>`,
      data() {
        return {
          movies: [
            {
              title: "Fiction"
            },
            {
              title: "home alone"
            },
            {
              title: "Austin"
            }
          ]
        };
      }
    },

    "movie-filter": {
      data() {
        return {
          ganres
        };
      },
      template: `
      <div id="movie-filter">
        <h2>Filter results</h2>
        <div class="filter-group">
          <check-filter 
            v-for="ganre in ganres" 
            v-bind:title="ganre"
            v-on:check-filter="checkFilter"></check-filter>
        </div>
      </div>
      `,
      methods:{
        checkFilter(){
          console.log('check filter');
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
          v-on:click="checkFilter()" >
            <span class="checkbox"></span>
            <span class="check-filter-title">{{ title }}</span>
          </div>`
        },
        methods: {
          checkFilter() {
            this.checked = !this.checked;
            this.$emit('check-filter');
          }
        }
      }
    }
  }
});
