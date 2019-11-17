import React from "react";
import { Component } from "react";
import { Typography, Paper, GridListTile } from '@material-ui/core';
import ButtonAppBar from "../components/ButtonAppBar";
import FilterBar from "../components/FilterBar";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import imageWoody from '../assets/img/dog-woody.JPG';
import imageMeg from '../assets/img/dog-meg.jpg';
import imageMain from '../assets/img/home-page.png';
import imageMiguel from '../assets/img/cat-miguel.jpg';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import { green, purple, grey, yellow } from '@material-ui/core/colors';
import GridList from '@material-ui/core/GridList';
import Toolbar from '@material-ui/core/Toolbar';


class PetsPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            amountAnimals: "10 mil",
            isFemale: true,
            page: 0,
            rowsPerPage: 10,
            pets:[
                {
                    name: "Woody",
                    image: imageWoody,
                    description:  "Labrador branco muito brincalhão de 4 meses. São Paulo - SP.",
                    gender: "M",
                    type:  "Cachorro de Grande Porte",

                },
                {
                    name: "Meggy",
                    image: imageMeg,
                    description:  "Muito tranquila e carinhosa de 1 ano. Rio de Janeiro - RJ.",
                    gender: "F",
                    type:  "Cachorra de Pequeno Porte",
                },
                {
                    name: "Miguel",
                    image: imageMiguel,
                    description:  "Muito brincalhão de 2 ano. Rio de Janeiro - RJ.",
                    gender: "M",
                    type:  "Gato de Pequeno Porte",
                }
            ]
            
        };
    }

    popUp() {
        alert("ADOTAR");
    } 

    whichGender(gender) {
        if(gender=='M') {
            this.state.isFemale = false;
        } else {
            this.state.isFemale = true;
        }
    }

    render() {
        const { classes } = this.props;
        const { pets, rowsPerPage, page } = this.state;
        return(
            <div>
                <ButtonAppBar></ButtonAppBar>
                <div className={classes.root}>  
                    <Paper  square={true} className={classes.main}>
                        <Toolbar>
                            <img src={imageMain} height="300"/>
                            <Typography className={classes.spaceMain}></Typography>
                            <Typography variant="h4" className={classes.titleMain}>
                               <b> {this.state.amountAnimals}</b><br/>  pets buscando um lar
                            </Typography>
                        </Toolbar>
                    </Paper>
                    <FilterBar></FilterBar>
                </div>
                <div className={classes.grid}>
                    <GridList cellHeight={360}  cols="3">
                    {pets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(pet => {
                            this.whichGender(pet.gender);
                            return (
                                <GridListTile>
                                    <Card className={classes.card} onClick={this.popUp}>
                                        <CardHeader
                                            avatar={
                                            <Avatar aria-label="recipe" className={this.state.isFemale ? classes.female : classes.male}>
                                                {pet.gender}
                                            </Avatar>
                                            }
                                            title={pet.type}
                                        />
                                        <CardActionArea>
                                            <CardMedia
                                            className={classes.media}
                                            image={pet.image}
                                            title={pet.name}
                                            />
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {pet.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {pet.description}
                                            </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </GridListTile>
                            );
                    })};
                    </GridList>
                </div>
            </div>
        )
    }
}

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 10,
      marginBottom: theme.spacing.unit * 3,
      flexGrow: 1,
    },
    card: {
        marginTop: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 2,
        maxWidth: 345,
      },
    media: {
        height: 140,
    },
    female: {
        backgroundColor: purple[400],
    },
    male: {
        backgroundColor: green[400],
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
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
})

export default withStyles(styles)(PetsPage);