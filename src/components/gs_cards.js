import React from 'react';
import './Cards.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import View1 from './Dashboard/view1';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


function Cards_gs() {
  return (
    <div className='cards'>
      <h1> Hi GS! Welcome </h1>
      <h3> Udapalatha GS wasama under the Kandy Division Secretariate, looks forward to serve public through this platform </h3>

      {/* <h1> Our Services </h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>

          
        <Grid item xs={12} md={4} lg={6}>
              <paper> 
                <View1 />

              </paper>

              <paper> 
                
              </paper>

            </Grid>

          {/* <ul className='cards__items'>
            
            <CardItem
              src='images/img-form.jpg'
              text='Download official forms online!'
              label='Forms'
              path='/forms/form2'
            />
            <CardItem
              src='images/img-cons.jpg'
              text='View Past Projects, Current projects and Projects planned in the future  '
              label='Projects'
              path='/projects/grids/PresentProjects'
            />
            <CardItem
              src='images/img-rec.png'
              text='Resource and material Distribution details'
              label='Resource'
              path='/resourcematerial/card1'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards_gs;
