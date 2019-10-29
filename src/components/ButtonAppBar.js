import React from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core/';
import { blue, grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: blue[400],
  },
  button: {
    color: grey[50],
    textDecoration: 'none',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <Typography variant="h6">
            AdotaPatas
          </Typography>
          <Typography className={classes.title} />
          <Link to="/pets" className={classes.button}>
            <Button color="inherit">Pets</Button>
          </Link>
          <Button color="inherit" edge="end">Produtos</Button>
          <Link to="/portal" className={classes.button}>
            <Button color="inherit">Área Pets</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
