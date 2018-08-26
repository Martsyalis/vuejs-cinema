import Vue from "vue";
import VueResource from 'vue-resource';
import moment from 'moment-timezone'
import "./style.scss";

import MovieFilter from './components/MovieFilter.vue'
import MovieList from './components/MovieList.vue';
Vue.use(VueResource);

// add moment to the vue prototype so its accesible through out the project
moment.tz.setDefault("UTC")
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment} })

new Vue({
  el: "#app",
  data:{
    genre: [], 
    time: [],
    movies: [],
    moment,
    day: moment()._d
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
    MovieList,
    MovieFilter
  },
  created(){
    this.$http.get('/api').then(res => {
      this.movies = res.data;
    })
  }
 
});
