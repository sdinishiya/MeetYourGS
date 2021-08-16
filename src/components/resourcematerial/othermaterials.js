import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import {Box,Button} from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(addeddate, materialid, materialname, quantity) {
  return {addeddate, materialid, materialname, quantity };
}

const rows = [
  createData('07/15/2021','O001', 'Edu lanka', '150'),
  createData('08/15/2021','O002', 'Lets go', '120'),
  createData('09/15/2021','O003', 'Kids day', '100'),

];

<br></br>
export default function OtherResources() {
  const classes = useStyles();

  return (
    
    <div>
      <br />
    <h1> Material Details</h1>
    <br />
    <TableContainer component={Paper}>
      <br />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>Added Date</b></TableCell>
            <TableCell align="center"><b>Material ID</b></TableCell>
            <TableCell align="center"><b>Material Name</b></TableCell>
            <TableCell align="center"><b>Quantity</b></TableCell>
            <TableCell align="center"><b></b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center"><b>{row.addeddate}</b></TableCell>
              <TableCell align="center">{row.materialid}</TableCell>
              <TableCell align="center">{row.materialname}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center"><IconButton aria-label="edit"><EditIcon /></IconButton></TableCell>
              <TableCell align="center"><IconButton color='Secondary'aria-label="delete"><DeleteIcon /></IconButton></TableCell>
              {/* <TableCell align="center"><Button variant="contained" color="primary">Edit</Button></TableCell>
              <TableCell align="center"><Button variant="contained" color="secondary">Delete</Button></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Link to={'/materials/AddMaterials2'}>
      <Button
        color="primary"
        variant="contained"
      >
        Add Materials
      </Button>
      </Link>

      <Link to={'/materials/SupplyMaterials2'}>
      <Button
        color="primary"
        variant="contained"
      >
        Supply Materials
      </Button>
      </Link>
    </div>
  );
}