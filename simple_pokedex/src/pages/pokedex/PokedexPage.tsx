import { Box } from '@mui/material';
import Header from '../../components/header/header';
import PokedexHooks from '../../hooks/pokedex/PokedexState';
import LoadingContents from './templates/LoadingContents';
import LoadingErrorContents from './templates/LoadingErrorContents';
import ObtainedContents from './templates/ObtainedContents';

/**
 * ポケモン図鑑
 * @returns
 */
const PokedexPage = () => {
  const status = PokedexHooks();

  return (
    <Box width="100vw" height="100vh">
      <Header title="Pokedex" />
      {status.state.state === 'LOADING' && <LoadingContents />}
      {status.state.state === 'LOADING_ERROR' && <LoadingErrorContents />}
      {(status.state.state === 'LOADED' ||
        status.state.state === 'ADDITIONAL_LOADING' ||
        status.state.state === 'ADDITIONAL_ERROR') && <ObtainedContents />}
    </Box>
  );
};

export default PokedexPage;
