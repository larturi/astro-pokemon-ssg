import type { FavoritePokemon } from '@interfaces/favorite-pokemon'
import { createSignal, Show, type Component } from 'solid-js'
import { localStorageKeyPokemons } from 'src/constants'

interface Props {
  pokemon: FavoritePokemon
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
  const [isVisible, setIsVisible] = createSignal(true)

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`

  const deletefavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem(localStorageKeyPokemons) || '[]'
    ) as FavoritePokemon[]

    const newFavorites = favorites.filter(
      (favorite: FavoritePokemon) => favorite.name !== pokemon.name
    )

    localStorage.setItem(localStorageKeyPokemons, JSON.stringify(newFavorites))

    setIsVisible(false)
  }

  return (
    <Show when={isVisible()}>
      <div class='flex flex-col justify-center items-center mt-10'>
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            src={imageSrc}
            alt={pokemon.name}
            width={120}
            height={120}
            style={`view-transition-name: image-${pokemon.name}`}
          />
          <p class='capitalize text-center mt-1'>
            #{pokemon.id} - {pokemon.name}
          </p>
        </a>
        <button
          onClick={deletefavorite}
          class='text-red-500 mt-4 border-2 border-red-500 px-4 py-2 rounded-lg'
        >
          Delete
        </button>
      </div>
    </Show>
  )
}
