import axios, { HttpStatusCode } from 'axios';
import { useState } from 'react';
import './App.css';

interface ApiResponse<T> {
  status: number;
  body?: T;
}

interface PokemonList {
  count: number;
  next?: string;
  previous?: string;
  results: Array<PokemonIndex>;
}

interface PokemonIndex {
  name: string;
  url: string;
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprite;
  types: Array<PokemonType>;
  stats: Array<PokemonStat>;
  abilities: Array<PokemonAbility>;
};

interface PokemonSprite {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

function App() {
  const [pokemonList, setPokemonList] = useState<PokemonList>({
    count: 0,
    results: [],
  });

  const [pokemon, setPokemon] = useState<Pokemon>({
    name: '',
    height: 0,
    weight: 0,
    sprites: {},
    types: [],
    stats: [],
    abilities: [],
  });

  return (
    <>
      <h1>Simple Pokedex2</h1>
      <div className="card">
        <button onClick={async () => {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
            .then((response) => {
              return {
                status: response.status,
                body: response.data as PokemonList,
              } as ApiResponse<PokemonList>;
            });
          if (response.status != HttpStatusCode.Ok || response.body == null) {
            return;
          }
          console.log(response.body);
          setPokemonList(response.body);
        }}>
          GET Pokemon LIST
        </button>
        <p>
          count: {pokemonList.count}
        </p>
        <p>
          next: {pokemonList.next}
        </p>
        <p>
          previous: {pokemonList.previous}
        </p>
        <button onClick={async () => {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
            .then((response) => {
              return {
                status: response.status,
                body: response.data,
              } as ApiResponse<Pokemon>
            });

          if (response.body == null || response.status != HttpStatusCode.Ok) {
            return;
          }

          console.log(response.body);
          setPokemon(response.body);
        }}>
          GET Pokemon No. 1
        </button>
        <p>name: {pokemon.name}</p>
        {
          pokemon.sprites.front_default != null &&
          <img src={pokemon.sprites.front_default} />
        }
        <p>
          height: {pokemon.height}
        </p>
        <p>
          weight: {pokemon.weight}
        </p>
        <p>
          abilities
        </p>
        {
          pokemon.abilities.map(
            (ability) => <p>{ability.ability.name}</p>
          )
        }
      </div>
    </>
  )
}

export default App
