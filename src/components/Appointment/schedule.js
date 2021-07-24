import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { red } from '@material-ui/core/colors';
import { useState } from 'react'; 

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: red,
  },
}));

export default function Schedule() {
  const classes = useStyles();

  const[gsname, setName] = useState("");
  const[date, setDate] = useState(0);
  const[time, setTime] = useState(0);
  const[des, setDes] = useState("");

  const displayInfo = () => {
      console.log(gsname + date + time + des )
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Schedule Appointment Slots
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                autoComplete="GSname"
                name="gsname"
                variant="outlined"
                required
                fullWidth
                id="gsname"
                label="GS Name"
                autoFocus
                onchange= {(event)=>{
                    setName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="date"
                name="date"
                type="date"
                variant="outlined"
                required
                fullWidth
                id="date"
                label=""
                autoFocus
                onchange= {(event)=>{
                    setDate(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                autoComplete="time"
                name="time"
                type="time"
                variant="outlined"
                required
                fullWidth
                id="time"
                label=""
                autoFocus
                onchange= {(event)=>{
                    setTime(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="note"
                label="Description "
                name="note"
                autoComplete="note"
                onchange= {(event)=>{
                    setDes(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick ={displayInfo}
          >
            Add Slot
          </Button>
        </form>
      </div>
      
    </Container>
  );
}