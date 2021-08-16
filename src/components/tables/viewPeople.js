import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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
export default function People() {
  const classes = useStyles();

  return (
    
    <div>
      <br />
    <h1> Villager Details</h1>
    <br />
    <TableContainer component={Paper}>
      <br />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left"><b>Villager ID</b></TableCell>
            <TableCell align="left"><b>Villager Name</b></TableCell>
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
    <div className={classes.button} >
            <br />
      <Button variant="contained"  color="primary">
      <Link
                to='/tables/viewVoter'
                className='nav-links'
              >
              View Voters 
              </Link>
      </Button>
      <br />
      <br />
      <Button variant="contained"  color="primary">
      <Link
                to='/register_voters'
                className='nav-links'
              >
              Register Voters <br />
              </Link>
      </Button>
      <br />
      <br />
      <Button variant="contained"  color="primary">
      <Link
                to='/register_villagers'
                className='nav-links'
              >
              Register Villagers
              </Link>
      </Button>
      
      
      
    </div>
    <br />
    <footer/>
    </div>
    
    

    
  );
}