<script setup lang="ts">
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import Pokemons from '../components/pokemons.vue'
const store = useStore()
const pokemons = computed(() => store.state.pokemons)
</script>

<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Pokemons v-for="pok in pokemons" :key="pok.id"
        :id="pok.id"
        :nome="pok.nome"
        :tipo0="pok.tipo0"
        :tipo1="pok.tipo1">
        </Pokemons>
  </div>
</template>