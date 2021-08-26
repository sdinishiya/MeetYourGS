import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectReviewCard from '../../projects/cards/PresentProjects';
import PresentProject1 from '../../../assets/img/PresentProject1.jpg' ; 
import PresentProject2 from '../../../assets/img/PresentProject2.jpg' ; 
import PresentProject3 from '../../../assets/img/PresentProject3.jpg' ; 
import PresentProject4 from '../../../assets/img/PresentProject4.jpg' ; 
import PresentProject5 from '../../../assets/img/PresentProject5.jpg' ; 
import FutureProject1 from '../../../assets/img/FutureProject1.jpg' ; 
import FutureProject2 from '../../../assets/img/FutureProject2.jpg' ; 
import FutureProject3 from '../../../assets/img/FutureProject3.jpg' ; 
import PastProject1 from '../../../assets/img/PastProject1.jpg' ; 
import PastProject2 from '../../../assets/img/PastProject2.jpg' ; 
import PastProject3 from '../../../assets/img/PastProject3.jpg' ; 

import { FormatColorResetTwoTone } from '@material-ui/icons';
import { autoDetect } from '@mobiscroll/react';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(30),
            width: theme.spacing(30),
            height: theme.spacing(50),
        },
    },
    
}));


export default function CenteredGrid() {
  const classes = useStyles();

  return (
      <div>
    <br /><br /><br /> <h1> ON-GOING PROJECTS </h1> <br />
    <p><h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3></p>
          <br /><br /><br />

    <Grid container spacing={2}>

        <Grid item xs={12} lg={3}>
            <ProjectReviewCard title='Build a School' subheader='June 15, 2021' image={PresentProject1} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            hovertitle='Build a School'/>
        </Grid>
        <Grid item xs={12} lg={3}>
            <ProjectReviewCard title='Mushroom Project' subheader='June 24, 2021' image={PresentProject2} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            hovertitle='Mushroom Project'/>
        </Grid>
        <Grid item xs={12} lg={3}>
            <ProjectReviewCard title='Empower Her' subheader='July 3, 2021' image={PresentProject3} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            hovertitle='Empower Her'/>
        </Grid>
        <Grid item xs={12} lg={3}>
            <ProjectReviewCard title='Relief For Tea Planters' subheader='July 7, 2021' image={PresentProject4} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            hovertitle='Relief For Tea Planters'/>
        </Grid>
        <Grid item xs={12} lg={3}>
            <ProjectReviewCard title='Samurdhi Dry Ration Distibution' subheader='July 10, 2021' image={PresentProject5} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            hovertitle='Samurdhi Dry Ration Distibution'/>
        </Grid>
       
    </Grid>
   <br /><br /><br /><h1>FUTURE PROJECTS</h1><br />
   <p><h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3></p>
          <br /><br /><br />
     <Grid container spacing={2}>

     <Grid item xs={12} lg={3}>
         <ProjectReviewCard title='Build a School' subheader='June 15, 2021' image={FutureProject1} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         hovertitle='Build a School'/>
     </Grid>
     <Grid item xs={12} lg={3}>
         <ProjectReviewCard title='Mushroom Project' subheader='June 24, 2021' image={FutureProject2} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         hovertitle='Mushroom Project'/>
     </Grid>
     <Grid item xs={12} lg={3}>
         <ProjectReviewCard title='Empower Her' subheader='July 3, 2021' image={FutureProject3} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         hovertitle='Empower Her'/>
     </Grid>
     
     </Grid>
     <br /><br /><br /><h1>PAST PROJECTS</h1><br />
   <p><h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3></p>
          <br /><br /><br />
     <Grid container spacing={2}>

     <Grid item xs={12} lg={3}>
         <ProjectReviewCard title='Build a School' subheader='June 15, 2021' image={PastProject1} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         hovertitle='Build a School'/>
     </Grid>
     <Grid item xs={12} lg={3}>
         <ProjectReviewCard title='Mushroom Project' subheader='June 24, 2021' image={PastProject2} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         hovertitle='Mushroom Project'/>
     </Grid>
     <Grid item xs={12} lg={3}>
         <ProjectReviewCard title='Empower Her' subheader='July 3, 2021' image={PastProject3} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         hovertitle='Empower Her'/>
     </Grid>
     
     </Grid>
 </div>);
  
}
