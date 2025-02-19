import { Box } from '@mui/material';
import { useEffect, useReducer } from 'react';
import Header from '../../components/header/header';
import PokedexState from '../../hooks/pokedex/PokedexState';
import LoadingContents from './templates/LoadingContents';
import LoadingErrorContents from './templates/LoadingErrorContents';
import ObtainedContents from './templates/ObtainedContents';

/**
 * ポケモン図鑑
 * @returns
 */
const PokedexPage = () => {
  const [state, dispatch] = useReducer(PokedexState, { state: 'LOADING' });

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'FETCHED' });
    }, 500);
  }, []);

  return (
    <Box width="100vw" height="100vh">
      <Header title="Pokedex" />
      {state.state === 'LOADING' && <LoadingContents />}
      {state.state === 'LOADING_ERROR' && <LoadingErrorContents />}
      {(state.state === 'LOADED' ||
        state.state === 'ADDITIONAL_LOADING' ||
        state.state === 'ADDITIONAL_ERROR') && <ObtainedContents />}
    </Box>
  );
};

export default PokedexPage;
