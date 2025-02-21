import axios, { HttpStatusCode } from 'axios';
import { useCallback, useEffect, useReducer } from 'react';
import { PokemonList } from '../../api_response/api/v2/pokemon/PokemonList';
import { ApiResponse } from '../../api_response/ApiResponse';
import PokedexReducer from '../../reducers/pokedex/PokedexReducer';
import { PokedexStatus } from './@types';

const PokedexHooks = (): PokedexStatus => {
  const [state, dispatch] = useReducer(PokedexReducer, { state: 'LOADING' });

  const onLoad = useCallback(async () => {
    const response: ApiResponse<PokemonList> = await axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => {
        return {
          status: response.status,
          body: response.data as PokemonList,
        };
      });

    console.log(`pokemon list response `, response);
    
    if (response.status != HttpStatusCode.Ok) {
      return;
    }

    dispatch({ type: 'FETCHED' });
  }, []);

  useEffect(() => {
    onLoad();
  }, []);

  return {
    state: state,
  };
};

export default PokedexHooks;
