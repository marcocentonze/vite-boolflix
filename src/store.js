import { reactive } from "vue";

import axios from "axios";

export const store = reactive({
  base_url:
    "https://api.themoviedb.org/3/search/multi?api_key=b66a3b3792a33deaa58ea606949dd2a3&include_adult=false&language=it-IT&page=1&media_type=movie",
  movies: null,

  connectionAPI() {
    axios
      .get(this.base_url)
      .then((response) => {
        this.movies = response.data.results;
      })
      .catch((error) => {
        console.log("Error:Api non funzionante");
        console.error(error);
      });
  },
});
