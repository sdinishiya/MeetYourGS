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

function createData(villagerid, fullname, address, telephone, email, button) {
  return { villagerid, fullname, address, telephone, email, button };
}

const rows = [
  createData('V001', 'Mohomed Salman', 'Navalapitiya', '0771234567', 'salman@gmail.com', 'button'),
  createData('V002', 'Hirusha Chamod', 'Ambalangoda', '0772345678', 'hirusha@gmail.com', 'button'),
  createData('V003', 'Dineshiya Sudharshan', 'Wellawatta', '0773456789', 'dineshiya@gmail.com', 'button'),
  createData('V004', 'Lishani Suriyampola', 'Kandy', '0774567890', 'lishani@gmail.com', 'button'),
  createData('V001', 'Maheshi Yatipansalawa', 'Gampola', '0775678901', 'maheshi@gmail.com', 'button'),
];

<br></br>
export default function BasicTable() {
  const classes = useStyles();

  return (
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"><b>Villager ID</b></TableCell>
            <TableCell align="right"><b>Villager Name</b></TableCell>
            <TableCell align="right"><b>Address</b></TableCell>
            <TableCell align="right"><b>Telephone</b></TableCell>
            <TableCell align="right"><b>Email</b></TableCell>
            <TableCell align="right"><b>Delete</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.villagerid}</TableCell>
              <TableCell align="right">{row.fullname}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.telephone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.button}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
