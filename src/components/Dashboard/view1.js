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

export default function View1() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total Number of Registered Voters</Title>
      <Typography component="p" variant="h5">
        25,024
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        as at 15 March, 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Voters List
        </Link>
      </div>
    </React.Fragment>
  );
}