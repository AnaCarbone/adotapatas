import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { blue, grey } from '@material-ui/core/colors';
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title :{
    flexGrow: 1,
  },
  header: {
    backgroundColor: blue[400],
  },
  button: {
    color: grey[50],
    textDecoration: 'none'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <Typography variant="h6" >
            AdotaPatas
          </Typography>
          <Typography className={classes.title}></Typography>
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