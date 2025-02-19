import { Box, Button, Stack, Typography } from '@mui/material';

const LoadingErrorContents = () => {
  return (
    <Box display="flex" flexGrow={1} width="100%" height="90%">
      <Stack justifyContent="center" alignItems="center" margin="0 auto">
        <Typography>loading error!!</Typography>
        <Button>Retry</Button>
      </Stack>
    </Box>
  );
};

export default LoadingErrorContents;
