import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function View2() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Number of pending Appointment Requests</Title>
      <Typography component="p" variant="h5">
        05
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Appointment Requests
        </Link>
      </div>
    </React.Fragment>
  );
}