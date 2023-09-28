<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    data() {
        return {

        };
    },
};







</script>

<template>
    <HelloWorld />
    <div class="text-center">
        <input type="text" placeholder="Cerca il tuo film...">
        <button>Cerca</button>
    </div>
</template>

<style scoped></style>
