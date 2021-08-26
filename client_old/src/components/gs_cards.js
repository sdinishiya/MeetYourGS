import React, { useEffect, useState } from 'react';
import './Cards.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Notice from './Dashboard/GSnotice';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

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
  const [notices, setnotices] = useState([]);

  useEffect(() => {
   getdata();
  }, [])


  function getdata(){
    axios.get("http://localhost:3001/noticeview").then((response)=>{
      setnotices(response.data);
      console.log(response.data);
    })
  }

  return (
    <div className='cards'>
      <h1> Hi GS! Welcome </h1>
      <h3> Udapalatha GS wasama under the Kandy Division Secretariate, looks forward to serve public through this platform </h3>

      {/* <h1> Our Services </h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>

          
        <Grid item xs={12} md={4} lg={6}>
              <paper> 
                {notices.map(notice=>(<Notice topic={notice.topic} 
                                              description={notice.description} 
                                              uploadDate={notice.uploadDate}
                                              expDate={notice.expDate} />))}
              </paper>


            </Grid>

        </div>
      </div>
    </div>
  );
}

export default Cards_gs;
