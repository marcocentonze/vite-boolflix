<script>
import { store } from './store.js';
import HelloWorld from './components/HelloWorld.vue'

export default {
    data(){
        return{
         store,
         movieSearch:''
        }
    },
    name: 'App',
    components: {
        HelloWorld
    },
    searchResult(){
      store.base_url = store.base_url + `&query=${this.movieSearch}`
      store.connectionAPI();
      this.movieSearch = '';
    },
    created() {
    store.connectionAPI();
    //console.log(store.connectionAPI);
  }
};







</script>

<template>
    <HelloWorld />
    <div class="text-center">
        <input type="text" placeholder="Cerca il tuo film..." v-model="movieSearch" @keyup.enter="searchResult()"> 
        <button @click="searchResult()">Cerca</button>
    </div>
</template>

<style scoped></style>
