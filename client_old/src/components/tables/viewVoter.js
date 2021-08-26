import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import GSNavbar from '../gs_navbar';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(donorid, fullname, address, telephone, email, num) {
  return { donorid, fullname, address, telephone, email, num };
}

const rows = [
  createData('V001', 'Mohomed Salman', 'Navalapitiya', '0771234567', 'salman@gmail.com', '10'),
  createData('V002', 'Hirusha Chamod', 'Ambalangoda', '0772345678', 'hirusha@gmail.com', '11'),
  createData('V003', 'Dineshiya Sudharshan', 'Wellawatta', '0773456789', 'dineshiya@gmail.com', '12'),
  createData('V004', 'Lishani Suriyampola', 'Kandy', '0774567890', 'lishani@gmail.com', '13'),
  createData('V001', 'Maheshi Yatipansalawa', 'Gampola', '0775678901', 'maheshi@gmail.com', '14'),
];

<br></br>
export default function Voters() {
  const classes = useStyles();

  return (
    <div> 
      <GSNavbar />
    <div>
      <br />
    <h1> Voters Details</h1>
    <br />
    <TableContainer component={Paper}>
      <br />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left"><b>Voter ID</b></TableCell>
            <TableCell align="left"><b>Voter Name</b></TableCell>
            <TableCell align="left"><b>Address</b></TableCell>
            <TableCell align="left"><b>Telephone</b></TableCell>
            <TableCell align="left"><b>Email</b></TableCell>
            <TableCell align="left"><b>House No.</b></TableCell>
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
  </div> 
  );
}