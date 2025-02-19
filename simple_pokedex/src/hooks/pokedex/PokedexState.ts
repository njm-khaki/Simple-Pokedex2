import { Pokemon } from '../../api_response/api/v2/pokemon/_index/Pokemon';

export type PokedexStates =
  | { state: 'LOADING' }
  | { state: 'LOADING_ERROR' }
  | {
      state: 'LOADED';
      // pokemonList: Array<Pokemon>
    }
  | { state: 'ADDITIONAL_LOADING' }
  | { state: 'ADDITIONAL_ERROR' };

export type PokedexActions =
  | {
      type: 'FETCHED';
      // args: { pokemonList: Array<Pokemon> }
    }
  | {
      type: 'FETCH_ERROR';
    }
  | {
      type: 'ADDITIONAL_FETCH';
    }
  | {
      type: 'ADDITIONAL_FETCHED';
    };

const PokedexState = (
  state: PokedexStates,
  actions: PokedexActions
): PokedexStates => {
  switch (actions.type) {
    case 'FETCHED':
      return { state: 'LOADED' };
    case 'FETCH_ERROR':
      return { state: 'LOADING_ERROR' };
    case 'ADDITIONAL_FETCH':
      return { state: 'ADDITIONAL_LOADING' };
    case 'ADDITIONAL_FETCHED':
      return { state: 'ADDITIONAL_ERROR' };
  }
};

export default PokedexState;
