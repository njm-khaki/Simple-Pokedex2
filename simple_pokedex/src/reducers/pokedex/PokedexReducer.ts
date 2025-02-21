import { PokedexActions, PokedexStates } from './@types';

const PokedexReducer = (
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

export default PokedexReducer;
