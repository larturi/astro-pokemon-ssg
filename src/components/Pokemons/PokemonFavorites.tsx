import type { FavoritePokemon } from '@interfaces/favorite-pokemon'
import { createSignal, For } from 'solid-js'

const getFavoritePokemonsFromLocalStorage = (): FavoritePokemon[] => {
  const favoritePokemons = JSON.parse(localStorage.getItem('favoritesPokemons') || '[]')

  return favoritePokemons
}

export const PokemonFavorites = () => {
  const [pokemons, setPokemons] = createSignal(getFavoritePokemonsFromLocalStorage())
  return (
    <div class='grid grid-cols-2 sm:grid-cols-4 gap-4'>
      <For each={pokemons()}>{(pokemon) => <h1>{pokemon.name}</h1>}</For>
    </div>
  )
}
