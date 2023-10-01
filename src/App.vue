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
    <!-- navbar -->
    <div class="text-center bg-container d-flex py-3 container-fluid">
        <div class="col-4">
            <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png">
        </div>

        <div class="col-4 pt-5">
            <a class="px-2 text-decoration-none text-black" href="#">FILM</a>
            <a class="px-2 text-decoration-none text-black" href="#">FILM</a>
            <a class="px-2 text-decoration-none text-black" href="#">FILM</a>
            <a class="px-2 text-decoration-none text-black" href="#">FILM</a>
        </div>

        <div class="col-4 pt-4">
            <input class="mx-2" type="search" placeholder="Cerca il tuo film..." v-model="movieSearch"
                @keyup.enter="searchResult()">
            <button type="submit" @click="searchResult()">Cerca</button>
        </div>
    </div>



    <!--MAIN-->
    <main class="bg-container">
    <div class="container mt-4">
        <div class="row g-4">
            <div class="col-md-4" v-for="movie in store.movies">
                <div class="card movie-card">
                    
                    <div class="card-image rounded" :style="'background-image: url(https://image.tmdb.org/t/p/w342' + movie.poster_path + ')'"></div>
                    <ul class="list-group">
                        <li class="list-group-item bg-color-card" v-if="movie.media_type != 'person'">
                            <div v-if="movie.media_type == 'movie'">TITOLO: {{ movie.title }}</div>
                            <div v-if="movie.media_type == 'tv'">TITOLO: {{ movie.name }}</div>
                            <div>TITOLO ORIGINALE: {{ movie.original_title ?? movie.original_name }}</div>
                            <div>LINGUA:
                                <img :src="languageFlags[movie.original_language]" alt="Flag" v-if="languageFlags[movie.original_language]">
                                <span v-else>Lingua sconosciuta</span>
                            </div>
                            <div>TRAMA: {{ movie.overview }}</div>
                            <div>VOTO:</div>
                            <div class="mb-2">
                                <span v-for="star in 5">
                                    <i :class="['fa', 'fa-star', 'text-warning', star <= Math.ceil(movie.vote_average / 2) ? 'fa-solid' : 'fa-regular']"></i>
                                </span>
                                
                            </div>
                        </li>
                    </ul>
                </div>
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

.card.movie-card .card-image {
    width: 100%;
    height: 500px;
    background-size: cover;
    transition: filter 0.3s, transform 0.3s;
}

/* Stile info */
.card.movie-card .list-group-item {
    display: none;
    background-color: rgba(255, 255, 255, 0.9);
    position: absolute;
    justify-content: center;
    align-items: center;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}


.card.movie-card:hover .list-group-item {
    display: flex;
    flex-direction: column;
}
</style>

<!-- notes:
-formula (long form)= <i v-for="i in Math.ceil(movie.vote_average / 2)" class="fa-solid fa-star"></i>
                    <i v-for="i in (5 - Math.ceil((movie.vote_average / 2)))" class="fa-regular fa-star" v-if="movie.vote_average != 0"></i>
                    <i v-for="i in 5" class="fa-regular fa-star" v-if="movie.vote_average == 0"></i>

-    I used multi search on themoviedb and "Use multi search when you want to search for movies, TV shows and people in a single request."- So i have to delete "people" from the search con IF -->
