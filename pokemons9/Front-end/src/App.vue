<template>

<router-view/>
</template>


<script>
 import { useStore } from 'vuex'
   
    
    const store = useStore()
    store.dispatch('getPokemons')
    
</script>


