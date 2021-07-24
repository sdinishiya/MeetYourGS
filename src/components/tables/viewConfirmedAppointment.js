import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(donorid, fullname, address, time, telephone, email) {
  return { donorid, fullname, address, time , telephone, email};
}

const rows = [
  createData('V001', 'Mohomed Salman', '12.07.2021', '10.30', '0771234567', 'salman@gmail.com'),
  createData('V005', 'Maheshi Yatipansalawa', '19.07.2021', '14.30', '0775678901', 'maheshi@gmail.com'),
];

<br></br>
export default function ConfirmedAppointment() {
  const classes = useStyles();

  return (
    
    <div>
      <br />
    <h1> Confirmed Appointment Details</h1>
    <br />
    <TableContainer component={Paper}>
      <br />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>Appointment ID</b></TableCell>
            <TableCell align="center"><b>Villager Name</b></TableCell>
            <TableCell align="center"><b>Date</b></TableCell>
            <TableCell align="center"><b>Time</b></TableCell>
            <TableCell align="center"><b>Phone</b></TableCell>
            <TableCell align="center"><b>Email</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.donorid}</TableCell>
              <TableCell align="center">{row.fullname}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.telephone}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}