<script >
import { store } from '../store.js';
export default {
    name: 'AppHeader',
   
    data() {
        return {
            movieSearch:'',
        };
    },
    methods: {
        searchResult() {
            store.base_url = store.base_url + `&query=${this.movieSearch}`
            store.connectionAPI();
            this.movieSearch = '';
        },
    },
};



</script>

<template>
    

     <!-- navbar -->
     <div class="text-center bg-container d-flex py-3 container-fluid bg-black">
        <div class="col-4">
            <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png">
        </div>


        <div class="col-4 pt-5 ps-5">
            <ul class="nav nav-underline">
                <li class="nav-item">
                    <a class="nav-link text-white active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">TV Shows</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Movies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" >Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" >My list</a>
                </li>
            </ul>

        </div>

        <div class="col-4 pt-4">
            <input class="mx-2 rounded" type="search" placeholder="Cerca il tuo film..." v-model="movieSearch"
                @keyup.enter="searchResult()">
            <button type="submit" @click="searchResult()" class="rounded bg-danger">Cerca</button>
        </div>
    </div>
</template>

<style scoped>
.bg-container{
    font-family: 'Tillana', cursive;
}

</style>
