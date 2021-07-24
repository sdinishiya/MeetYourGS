import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

  button: {
    width: '70%',
    margin: 100,
    marginLeft: 950,
    marginTop: 50,
    align: 'center',
  },
});

function createData(gsname, date, time, des) {
  return { gsname, date, time, des};
}

const rows = [
  createData( 'Mr. Perera', '21.07.2021', '10.30 am', 'Only 15 mins' ),
  createData( 'Mr. Perera', '22.07.2021', '10.30 am', 'Only 15 mins' ),
  createData( 'Mr. Perera', '24.07.2021', '10.30 am', 'Only 15 mins' ),
  createData( 'Mr. Perera', '26.07.2021', '10.30 am', 'Only 15 mins' ),
  createData( 'Mr. Perera', '28.07.2021', '10.30 am', 'Only 15 mins' ),
  createData( 'Mr. Perera', '31.07.2021', '10.30 am', 'Only 15 mins' ),


];

<br></br>
export default function Booking1() {
  const classes = useStyles();

  return (
    
    <div>
      <br />
    <h1>Available Appointment Slots</h1>
    <br />
    <TableContainer component={Paper}>
      <br />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>GS Name</b></TableCell>
            <TableCell align="center"><b>Date</b></TableCell>
            <TableCell align="center"><b>Time</b></TableCell>
            <TableCell align="center"><b>Description</b></TableCell>
            <TableCell align="center"><b></b></TableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.gsname}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.des}</TableCell>
              <TableCell align="center"><Link to='/Appointment/bookApp'> <Button variant="contained" color="primary">Book</Button></Link></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

   </div>
  );
}