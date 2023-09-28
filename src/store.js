import { reactive } from "vue";

import axios from "axios";

export const store = reactive({
  base_url:
    "https://api.themoviedb.org/3/search/multi?api_key=44efb7bd1d6fe5c8077f10817ac9811f&include_adult=false&language=it-IT&page=1&media_type=movie",
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
