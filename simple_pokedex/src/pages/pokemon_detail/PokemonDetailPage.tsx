import { Box } from '@mui/material';
import LoadedContents from './templates/LoadedContents';
import Header from '../../components/header/header';

const PokemonDetailPage = () => {
  return (
    <Box width="100vw" height="100vh">
      <Header title="Poke 1" />
      <LoadedContents />
    </Box>
  );
};

export default PokemonDetailPage;
