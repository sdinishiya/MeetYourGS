import React from 'react';
import { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import axios from 'axios';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Notice(props) {
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

  const classes = useStyles();
  return (
    <React.Fragment>
      <Title> {props.topic}</Title>
      <Typography component="p" variant="h5">
          {props.uploadDate} - {props.expDate}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {props.description}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
        View details
        </Link>
      </div>
    </React.Fragment>
  );
}