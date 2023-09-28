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
        store.connectionAPI();
        //console.log(store.connectionAPI);
    }
};







</script>

<template>
    <HelloWorld />
    <!-- input + button -->
    <div class="text-center bg-container">
        <h1 class="text-danger">Boolflix</h1>
        <input type="search" placeholder="Cerca il tuo film..." v-model="movieSearch" @keyup.enter="searchResult()">
        <button type="submit" @click="searchResult()">Cerca</button>
    </div>


    <main class="bg-container">
        <!-- results -->
        <div class="container mt-4">
            <div class="row g-4">
                <div class="col-md-4" v-for="movie in store.movies">
                    <ul class="list-group">
                        <li class="list-group-item bg-color-card">TITOLO: {{ movie.title }}</li>
                        <li class="list-group-item bg-color-card">TITOLO ORIGINALE: {{ movie.original_title }}</li>
                        <li class="list-group-item bg-color-card">LINGUA: <span
                                v-if="languageFlags[movie.original_language]">
                                <img :src="languageFlags[movie.original_language]" alt="Flag">
                            </span>
                            <span v-else>
                                Lingua sconosciuta
                            </span>
                        </li>
                        <li class="list-group-item bg-color-card">VOTO: {{ movie.vote_average }}</li>

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
