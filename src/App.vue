<script>
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'

export default {
    data() {
        return {
            store,
        }
    },
    components: {
        AppHeader,
        AppMain,
    },
};







</script>

<template>
    <AppHeader/>
    <AppMain/>

</template>

 
<style>

</style>

<!-- notes:
-formula (long form)= <i v-for="i in Math.ceil(movie.vote_average / 2)" class="fa-solid fa-star"></i>
                    <i v-for="i in (5 - Math.ceil((movie.vote_average / 2)))" class="fa-regular fa-star" v-if="movie.vote_average != 0"></i>
                    <i v-for="i in 5" class="fa-regular fa-star" v-if="movie.vote_average == 0"></i>

-    I used multi search on themoviedb and "Use multi search when you want to search for movies, TV shows and people in a single request."- So i have to delete "people" from the search con IF -->
