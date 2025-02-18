import axios, { HttpStatusCode } from 'axios';
import { useState } from 'react';
import './App.css';

/**
 * APIレスポンス型
 */
interface ApiResponse<T> {
  // ステータスコード
  status: number;
  // レスポンスボディ
  body?: T;
}

/**
 * ポケモン一覧取得結果
 */
interface PokemonList {
  // ポケモンの総数
  count: number;
  // 次のポケモン取得URL
  next?: string;
  // 前のポケモン取得URL
  previous?: string;
  // ポケモン一覧
  results: Array<PokemonIndex>;
}

/**
 * ポケモン 取得情報
 */
interface PokemonIndex {
  // ポケモン名
  name: string;
  // 取得URL
  url: string;
}

/**
 * ポケモン情報
 */
interface Pokemon {
  // ポケモン名
  name: string;
  // 高さ
  height: number;
  // 重さ
  weight: number;
  // 見た目
  sprites: PokemonSprite;
  // タイプ
  types: Array<PokemonType>;
  // 種族値
  stats: Array<PokemonStat>;
  // 特性
  abilities: Array<PokemonAbility>;
};

/**
 * ポケモンの見た目
 */
interface PokemonSprite {
  // デフォルト 後ろ姿
  back_default?: string;
  // 後ろ姿 雌
  back_female?: string;
  // 後ろ姿 色違い
  back_shiny?: string;
  // 後ろ姿 色違い 雌
  back_shiny_female?: string;
  // デフォルト 前面
  front_default?: string;
  // 前面 雌
  front_female?: string;
  // 前面 色違い
  front_shiny?: string;
  // 前面 色違い 雌
  front_shiny_female?: string;
}

/**
 * ポケモン タイプ情報
 */
interface PokemonType {
  // タイプ番号
  slot: number;
  // タイプ情報
  type: {
    // タイプ名
    name: string;
    // タイプ情報 取得URL
    url: string;
  };
};

/**
 * ポケモン種族値情報
 */
interface PokemonStat {
  // 種族値
  base_stat: number;
  // 努力値
  effort: number;
  // 種族値詳細情報
  stat: {
    // 種族値名
    name: string;
    // 種族値情報URL
    url: string;
  };
};

/**
 * ポケモン 特性情報
 */
interface PokemonAbility {
  // 特性詳細情報
  ability: {
    // 特性名
    name: string;
    // 特性 詳細情報URL
    url: string;
  };
  // 夢(隠し)特性 フラグ
  is_hidden: boolean;
  // 特性番号
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
