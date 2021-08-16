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

// import { Search as SearchIcon } from 'react-feather';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  
});

function createData(addeddate, materialid, materialname, quantity) {
  return { addeddate, materialid, materialname, quantity };
}

const rows = [
  createData('06/15/2021', 'C001', 'Bricks', '150 Bricks'),
  createData('06/15/2021', 'C002', 'Sand', '10 Cubes'),
  createData('06/15/2021', 'C003', 'Construction Iron Rod (10mm)', '100 Rods'),

];

<br></br>
export default function ConstResources() {
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
            <TableCell colSpan={2} align="center"><b></b></TableCell>
            {/* <TableCell align="center"><b>Edit</b></TableCell>
            <TableCell align="center"><b>Delete</b></TableCell> */}
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
           
              <StyledTableCell align="left"><Link to='/manageuser/edit_admin'><div className={buttonClass.root}><Button variant="contained" color="primary">Edit</Button></div></Link></StyledTableCell>
              <StyledTableCell align="left"><div className={buttonClass.root}><Button variant="contained" color="secondary">Delete</Button></div></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody> */}

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center"><b>{row.addeddate}</b></TableCell>
              <TableCell align="center">{row.materialid}</TableCell>
              <TableCell align="center">{row.materialname}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              {/* <TableCell align="center">{row.action}</TableCell>
              <TableCell align="center">{row.action}</TableCell> */}
              <TableCell align="center"><IconButton aria-label="edit"><EditIcon /></IconButton></TableCell>
              <TableCell align="center"><IconButton color='Secondary'aria-label="delete"><DeleteIcon /></IconButton></TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {/* <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    ></Box> */}
    <Link to={'/materials/AddMaterials'}>
      <Button
        color="primary"
        variant="contained"
      >
        Add Materials
      </Button>
      </Link>
      {/* <Link to='/materials/AddMaterials'>
              <button
                type="submit"
                id="submitBtn"
                style={mystyle.submitBtn}
              //className="nextBtn"
              > Add Materials
              </button>
            </Link> */}

      <Link to={'/materials/SupplyMaterials'}>
      <Button
        color="primary"
        variant="contained"
      >
        Supply Materials
      </Button>
      </Link>
      {/* </Box> */}
</div>
  );
}
