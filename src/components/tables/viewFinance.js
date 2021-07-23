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
  createData('V001', 'Edu lanka', 'Navalapitiya', '0771234567', 'salman@gmail.com', '10,256'),
  createData('V002', 'Lets go', 'Ambalangoda', '0772345678', 'hirusha@gmail.com', '11,500'),
  createData('V003', 'Kids day', 'Wellawatta', '0773456789', 'dineshiya@gmail.com', '12,030'),
  createData('V004', 'Help women', 'Kandy', '0774567890', 'lishani@gmail.com', '13,000'),
  createData('V001', 'Career Guidance', 'Gampola', '0775678901', 'maheshi@gmail.com', '14,030'),
];

<br></br>
export default function Finance() {
  const classes = useStyles();

  return (
    
    <div>
      <br />
    <h1> Finance Details</h1>
    <br />
    <TableContainer component={Paper}>
      <br />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left"><b>Reciept No</b></TableCell>
            <TableCell align="left"><b>Project Name</b></TableCell>
            <TableCell align="left"><b>Place</b></TableCell>
            <TableCell align="left"><b>Contact</b></TableCell>
            <TableCell align="left"><b>Email</b></TableCell>
            <TableCell align="left"><b>Amount</b></TableCell>
           
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