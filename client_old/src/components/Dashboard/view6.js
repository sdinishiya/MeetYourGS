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

export default function View6() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Number of on-Going Projects in the GS division</Title>
      <Typography component="p" variant="h5">
        06
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View On-going Projects
        </Link>
      </div>
    </React.Fragment>
  );
}