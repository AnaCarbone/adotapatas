import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { yellow, grey } from '@material-ui/core/colors';
import FilterList from '@material-ui/icons/FilterList';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: theme.spacing.unit * 15,
    marginRight: theme.spacing.unit * 15,
    marginTop: theme.spacing.unit * 2,
  },
  space :{
    flexGrow: 1,
  },
  header: {
    backgroundColor: yellow[600],
  },
  title: {
    color: grey[900],
  },
  toolbar: {
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 5,
  }
}));

export default function FilterBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h7" className={classes.title} >
            Encontre seu Melhor Amigo
            </Typography>
            <Typography className={classes.space}></Typography>
            <Button>                           
                <FilterList/>
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}