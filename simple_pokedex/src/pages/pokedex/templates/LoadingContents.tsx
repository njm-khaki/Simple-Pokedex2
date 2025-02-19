import { Box, CircularProgress, Stack, Typography } from '@mui/material';

const LoadingContents = () => {
  return (
    <Box display="flex" flexGrow={1} width="100%" height="90%">
      <Stack justifyContent="center" alignItems="center">
        <Typography>now loading...</Typography>
      </Stack>
    </Box>
    // <Box display="flex" flexGrow={1} width="100%" height="90%">
    //   <Stack justifyContent="center" alignItems="center" margin="0 auto">
    //     <CircularProgress />
    //     <Typography>now loading...</Typography>
    //   </Stack>
    // </Box>
  );
};

export default LoadingContents;
