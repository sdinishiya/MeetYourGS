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

export default function View4() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Donations</Title>
      <Typography component="p" variant="h5">
        Rs.3,500.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 10 August, 2021
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Donations
        </Link>
      </div>
    </React.Fragment>
  );
}