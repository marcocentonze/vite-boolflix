<script >
import { store } from '../store.js';
export default {
    name: 'AppMain',
   
    data() {
        return {
            store,
              //oggetto che racchiude le lingue(non più di 4)
              languageFlags: {
                it: 'https://flagsapi.com/IT/flat/16.png',
                fr: 'https://flagsapi.com/FR/flat/16.png',
                de: 'https://flagsapi.com/DE/flat/16.png',
                en: 'https://flagsapi.com/GB/flat/16.png',

            },
        };
    },
    methods: {
       
    },
    created() {
        store.connectionAPI();//chiama movies e serie tv perchè è multi
        //console.log(store.connectionAPI);
    }
};



</script>

<template>
    

    <!--MAIN-->
    <main class="bg-container bg-dark-subtle">
        <div class="container mt-4">
            <div class="row g-4">
                <div class="col-md-4" v-for="movie in store.movies">
                    <div class="card movie-card">

                        <div class="card-image rounded"
                            :style="'background-image: url(https://image.tmdb.org/t/p/w342' + movie.poster_path + ')'">
                        </div>
                        <ul class="list-group list-unstyled">
                            <li class="list-group-item bg-color-card" v-if="movie.media_type != 'person'">
                                <li v-if="movie.media_type == 'movie'"><strong>TITOLO:</strong> {{ movie.title }}</li>
                                <li v-if="movie.media_type == 'tv'"><strong>TITOLO:</strong> {{ movie.name }}</li>
                                <li><strong>TITOLO ORIGINALE:</strong> {{ movie.original_title ?? movie.original_name }}</li>
                                <div>
                                    <li><strong>LINGUA:</strong>
                                    <img :src="languageFlags[movie.original_language]" alt="Flag"
                                        v-if="languageFlags[movie.original_language]">
                                    <span v-else>Lingua sconosciuta</span>
                                </li>
                                </div>
                                <li><strong>TRAMA:</strong> {{ movie.overview }}</li>
                                <div>
                                    <li><strong>VOTO:</strong>
                                    <span v-for="star in 5">
                                        <i
                                            :class="['fa', 'fa-star', 'text-warning', star <= Math.ceil(movie.vote_average / 2) ? 'fa-solid' : 'fa-regular']"></i>
                                    </span>
                                </li>

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
