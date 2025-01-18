import type { FavoritePokemon } from '@interfaces/favorite-pokemon'
import { createSignal, For } from 'solid-js'
import { FavoritePokemonCard } from './FavoritePokemonCard'
import { localStorageKeyPokemons } from 'src/constants'

const getFavoritePokemonsFromLocalStorage = (): FavoritePokemon[] => {
  const favoritePokemons = JSON.parse(localStorage.getItem(localStorageKeyPokemons) || '[]')

  return favoritePokemons
}

export const PokemonFavorites = () => {
  const [pokemons, setPokemons] = createSignal(getFavoritePokemonsFromLocalStorage())
  return (
    <div class='grid grid-cols-2 sm:grid-cols-4 gap-4'>
      <For each={pokemons()}>{(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}</For>
    </div>
  )
}
