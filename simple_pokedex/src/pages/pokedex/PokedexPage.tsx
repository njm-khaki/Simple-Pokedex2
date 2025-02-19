import { Box } from '@mui/material';
import Header from '../../components/header/header';
import ObtainedContents from './templates/ObtainedContents';

/**
 * ポケモン図鑑
 * @returns
 */
const PokedexPage = () => {
  return (
    <Box width="100vw" height="100vh">
      <Header title="Pokedex" />
      {/* <LoadingContents /> */}
      {/* <LoadingErrorContents /> */}
      <ObtainedContents />
    </Box>
  );
};

export default PokedexPage;
