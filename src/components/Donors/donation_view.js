import React from 'react';
import { Link } from 'react-router-dom';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Dashboard/Title';

import ListItemText from '@material-ui/core/ListItemText';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Donationview() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Donations</Title>
      <Typography component="p" variant="h4">
        Rs.3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 August, 2021
      </Typography>
      <div>
      <Link to='/Donors/add_donation' className='nav-link1'>
      <ListItemText primary="Add Direct Donations" />
      </Link>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          View Donation Details
        </Link> */}
      </div>
    </React.Fragment>
  );
}