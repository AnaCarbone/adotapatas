import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title :{
    flexGrow: 1,
  },
  header: {
    backgroundColor: blue[400],
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
          <Button color="inherit">Pets
              <Link to="/pets"></Link>
          </Button>
          <Button color="inherit" edge="end">Produtos</Button>
          <Button color="inherit">Área Pets</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}