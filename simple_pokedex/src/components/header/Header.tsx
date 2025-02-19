import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
