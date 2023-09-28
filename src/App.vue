<script>
import { store } from './store.js';
import HelloWorld from './components/HelloWorld.vue'

export default {
    data(){
        return{
         store,
         movieSearch:'',
        }
    },
    components: {
        HelloWorld
    },
   methods: {
    searchResult(){
      store.base_url = store.base_url + `&query=${this.movieSearch}`
      store.connectionAPI();
      this.movieSearch = '';
    },
   },
    created() {
    store.connectionAPI();
    //console.log(store.connectionAPI);
  }
};







</script>

<template>
    <HelloWorld />
    <!-- input + button -->
    <div class="text-center">
        <input type="search" placeholder="Cerca il tuo film..." v-model="movieSearch" @keyup.enter="searchResult()"> 
        <button type="submit" @click="searchResult()">Cerca</button>
    </div>
    

    <!-- results -->
    <div class="container mt-4">

        <ul class="list-group" v-for="movie in store.movies">
            <li class="list-group-item">>TITOLO: {{movie.title}}</li>
            <li class="list-group-item">TITOLO ORIGINALE: {{movie.original_title}}</li>
            <li class="list-group-item">LINGUA: {{movie.original_language}}</li>
            <li class="list-group-item">VOTO: {{movie.vote_average}}</li>
            <li class="list-group-item">TIPO DI CONTENUTO: {{movie.media_type}}</li>
        </ul>
    </div>


</template>

<style scoped></style>
