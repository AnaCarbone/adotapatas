import React from 'react';

import { Typography, Paper, Toolbar } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

import ButtonAppBar from '../components/ButtonAppBar';
import imageMain from '../assets/img/home-page.png';

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 3,
    flexGrow: 1,
  },
  main: {
    flexGrow: 1,
  },
  spaceMain: {
    flexGrow: 1,
  },
  titleMain: {
    color: grey[600],
  },
});

class PortalPetPage extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ButtonAppBar />
        <div className={classes.root}>
          <Paper square className={classes.main}>
            <Toolbar>
              <img src={imageMain} height="300" alt="AdotaPatas" />
              <Typography className={classes.spaceMain} />
              <Typography variant="h4" className={classes.titleMain}>
                <b>Compartilhe com a gente</b>
                <br />
                eventos, notícias e dicas!
              </Typography>
            </Toolbar>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PortalPetPage);
