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
