import {
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from '@mui/material';

const ObtainedContents = () => {
  return (
    // TODO: 画面幅を超えるのでレイアウト要調整
    <List>
      {[...Array(100)].map((_, i) => (
        <ListItem sx={{ cursor: 'pointer' }}>
          <ListItemButton>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}
            />
            <Typography>Poke {i + 1}</Typography>
          </ListItemButton>
        </ListItem>
      ))}
      {/* TODO: 状態に応じて表示切替 */}
      <ListItem sx={{ justifyContent: 'center' }}>
        <CircularProgress />
      </ListItem>
      <ListItem sx={{ justifyContent: 'center' }}>
        <Button sx={{ textTransform: 'none' }}>Retry</Button>
      </ListItem>
    </List>
  );
};

export default ObtainedContents;
