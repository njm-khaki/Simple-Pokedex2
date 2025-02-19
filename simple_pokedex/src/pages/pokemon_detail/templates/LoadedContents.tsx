import { Divider, Stack, Typography } from '@mui/material';

const LoadedContents = () => {
  return (
    <>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`}
      />
      <Divider />
      <Stack direction="column">
        <Typography>types</Typography>
        <Stack direction="row" justifyContent="space-around">
          <Typography>grass</Typography>
          <Typography>fire</Typography>
        </Stack>
        <Divider />
      </Stack>
      <Stack direction="column">
        <Typography>physical</Typography>
        <Stack direction="row" justifyContent="space-around">
          <Typography>height: 15</Typography>
          <Typography>weight: 30</Typography>
        </Stack>
        <Divider />
      </Stack>
      <Stack direction="column">
        <Typography>abilities</Typography>
        <Stack direction="row" justifyContent="space-around">
          <Typography>ability 1</Typography>
          <Typography>ability 2</Typography>
          <Typography>ability 3</Typography>
        </Stack>
        <Divider />
      </Stack>
      <Stack direction="column">
        <Typography>stats</Typography>
        <Stack direction="row" justifyContent="space-around">
          <Typography>hp 80</Typography>
          <Typography>atack 80</Typography>
          <Typography>special atack 80</Typography>
        </Stack>
        <Stack direction="row" justifyContent="space-around">
          <Typography>defence 80</Typography>
          <Typography>special defence 80</Typography>
          <Typography>speed 80</Typography>
        </Stack>
        <Divider />
      </Stack>
    </>
  );
};

export default LoadedContents;
