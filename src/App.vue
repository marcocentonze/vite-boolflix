<script>
import { store } from './store.js';
import HelloWorld from './components/HelloWorld.vue'

export default {
    data() {
        return {
            store,
            movieSearch: '',
            //oggetto che racchiude le lingue(non più di 4)
            languageFlags: {
                it: 'https://flagsapi.com/IT/flat/16.png',
                fr: 'https://flagsapi.com/FR/flat/16.png',
                de: 'https://flagsapi.com/DE/flat/16.png',
                en: 'https://flagsapi.com/EN/flat/16.png',

            },
        }
    },
    components: {
        HelloWorld
    },
    methods: {
        searchResult() {
            store.base_url = store.base_url + `&query=${this.movieSearch}`
            store.connectionAPI();
            this.movieSearch = '';
        },
    },
    created() {
        store.connectionAPI();//chiama movies e serie tv perchè è multi
        //console.log(store.connectionAPI);
    }
};







</script>

<template>
    <HelloWorld />
    <!--------------------------------- NAVBAR -------------------------->
    <div class="bg-container py-3 container-fluid">
    <div class="row align-items-center">
        <div class="col-md-3 text-md-start mb-3">
            <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" class="img-fluid" alt="Logo">
        </div>
        <div class="col-md-9 text-md-end">
            <form class="d-flex">
                <input type="search" class="form-control me-2" placeholder="Cerca i titoli di serie tv e film..." v-model="movieSearch" @keyup.enter="searchResult()">
                <button type="submit" class="btn btn-primary" style="background-color: #E50914; border-color: #E50914;">Cerca</button>
            </form>
        </div>
    </div>
</div>


  <!-------------------------------------MAIN----------------------------->
    <main class="bg-container">
        <!-- results -->
        <div class="container mt-4">
            <div class="row g-4">
                <div class="col-md-4" v-for="movie in store.movies">
                    <ul class="list-group">
                        <!-- TO DO:creare classe a poster_path per stylizzarlo -->
                        <img :src="'https://image.tmdb.org/t/p/w342' + movie.poster_path">
                        <li class="list-group-item bg-color-card" v-if="movie.media_type != 'person'">

                            <span v-if="movie.media_type == 'movie'">TITOLO: {{ movie.title }}
                            </span>

                            <span v-if="movie.media_type == 'tv'">TITOLO: {{ movie.name }}

                            </span>
                        </li>

                        <li class="list-group-item bg-color-card">
                            <span v-if="movie.media_type == 'movie'">TITOLO ORIGINALE: {{ movie.original_title }}
                            </span>

                            <span v-if="movie.media_type == 'tv' || movie.media_type == 'person'">TITOLO ORIGINALE:
                                {{ movie.original_name }}
                            </span>
                        </li>

                        <li class="list-group-item bg-color-card" v-if="movie.media_type != 'person'">LINGUA:
                            <span v-if="languageFlags[movie.original_language]">
                                <img :src="languageFlags[movie.original_language]" alt="Flag">
                            </span>

                            <span v-else>
                                Lingua sconosciuta
                            </span>
                        </li>

                        <li class="list-group-item bg-color-card" v-if="movie.media_type != 'person'">
                            <span>VOTO:</span>
                            <span v-for="star in 5">
                                <!---genero 5 stelle,condizione con match.ceil e solid(piena) o regular(vuota)-->
                                <i
                                    :class="['fa', 'fa-star', 'text-warning', star <= Math.ceil(movie.vote_average / 2) ? 'fa-solid' : 'fa-regular']"></i>
                            </span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.bg-color-card {
    background-color: rgb(199, 138, 94);
}

.bg-container {
    background-color: rgb(255, 245, 225);
    ;
}
</style>

<!-- notes:
I used multi search on themoviedb and "Use multi search when you want to search for movies, TV shows and people in a single request."- So i have to delete "people" from the search con IF -->
