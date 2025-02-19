import { AppBar, Box, Toolbar, Typography } from '@mui/material';

/**
 * ポケモン図鑑
 * @returns
 */
const PokedexPage = () => {
  return (
    <Box width="100vw" height="100vh">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pokedex
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <LoadingContents /> */}
      {/* <LoadingErrorContents /> */}
    </Box>
  );
};

export default PokedexPage;
