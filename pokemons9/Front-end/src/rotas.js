import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
    {
        path:'/',
        name:"Pokemons",
        component:()=>import('../src/components/pokemons.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router