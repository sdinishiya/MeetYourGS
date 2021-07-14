import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AllocateFunds() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5" color="FFAE2A"><b>
          Allocate Funds</b>
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="gsdid"
                name="gsdID"
                variant="outlined"
                required
                fullWidth
                id="gsdID"
                label="GSD ID"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="gsdname"
                name="gsdName"
                variant="outlined"
                required
                fullWidth
                id="gsdName"
                label="GSD Name"
                autoFocus
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="gsName"
                name="gsName"
                variant="outlined"
                required
                fullWidth
                id="gsName"
                label="GS Name"
                autoFocus
              />
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="telephone"
                name="telephone"
                variant="outlined"
                required
                fullWidth
                id="telephone"
                label="Telephone"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="project"
                name="project"
                variant="outlined"
                required
                fullWidth
                id="project"
                label="Project"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="amount"
                name="amount"
                variant="outlined"
                required
                fullWidth
                id="amount"
                label="Amount to Allocate"
                autoFocus
              />
            </Grid>
          </Grid>
          <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="FFAE2A"
          >
            Confirm
          </Button>
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}