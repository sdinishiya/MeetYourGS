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

function createData(donorid, fullname, address, telephone, email, num) {
  return { donorid, fullname, address, telephone, email, num };
}

const rows = [
  createData('V001', 'Mohomed Salman', '12.07.21', '0771234567', 'salman@gmail.com', '10.30'),
  createData('V002', 'Hirusha Chamod', '16.07.2021', '0772345678', 'hirusha@gmail.com', '11.00'),
  createData('V003', 'Dineshiya Sudharshan', '18.07.2021', '0773456789', 'dineshiya@gmail.com', '12.30'),
  createData('V004', 'Lishani Suriyampola', '19.07.2021', '0774567890', 'lishani@gmail.com', '13.00'),
  createData('V001', 'Maheshi Yatipansalawa', '19.07.2021', '0775678901', 'maheshi@gmail.com', '14.30'),
];

<br></br>
export default function Appointments() {
  const classes = useStyles();

  return (
    
    <div>
      <br />
    <h1> Appointment Details</h1>
    <br />
    <TableContainer component={Paper}>
      <br />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left"><b>Appointment ID</b></TableCell>
            <TableCell align="left"><b>Villager Name</b></TableCell>
            <TableCell align="left"><b>Date</b></TableCell>
            <TableCell align="left"><b>Phone</b></TableCell>
            <TableCell align="left"><b>Email</b></TableCell>
            <TableCell align="left"><b>Time</b></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.donorid}</TableCell>
              <TableCell align="left">{row.fullname}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{row.telephone}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.num}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}