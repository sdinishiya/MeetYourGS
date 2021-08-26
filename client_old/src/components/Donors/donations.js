import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Box,Button} from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import { Search as SearchIcon } from 'react-feather';

const mystyle = {
  editbtn: {
      marginTop: '10px',
      width: '125px',
      height: '30px',
      fontSize: '14px',
      backgroundColor: '#16ab31',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      marginRight: '30px'
  },
  deletebtn: {
    marginTop: '10px',
    width: '125px',
    height: '30px',
    fontSize: '14px',
    backgroundColor: '#e02424',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    marginRight: '30px'
}
};

export default function DonationView() {
  const [searchTerm,setSearchTerm]=useState("");
  const [donationList,setdonationList]=useState([])
  // const classes = useStyles();

  useEffect(()=>{
    axios.get("http://localhost:3001/donationview").then((response)=>{
        setdonationList(response.data)
    })
  },[])

  const declineapp =(donorID)=>{
    axios.delete(`http://localhost:3001/decline/${donorID}`);
  }

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div ><br/>
                <div className='box-main'>
                <h1> Donor & Donation Details</h1>
                </div><br/> 

                {/* <Table  bordered hover responsive> */}
              <TableContainer>
                <Table hover responsive>
                  <thead className="tableheading">
                    <tr>
                      <td align="center" scope="col"><b>Donor ID</b></td>
                      <td align="center" scope="col"><b>Donor Name</b></td>
                      <td align="center" scope="col"><b>Address</b></td>
                      <td align="center" scope="col"><b>Phone</b></td>
                      <td align="center" scope="col"><b>Email</b></td>
                      <td align="center" scope="col"><b>Date</b></td>
                      <td align="center" scope="col"><b>Amount</b></td>
                      <td align="center" scope="col"><b></b></td>
                      <td align="center" scope="col"><b></b></td>
                    </tr>
                  </thead>
                 <tbody className="tablebody">
                     {donationList.filter(val=>{if(searchTerm===""){
                       return val;
                     }else if(
                       val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.email.toLowerCase().includes(searchTerm.toLowerCase())) 
                     {
                       return val
                     }
                    }).map((record)=>{
                      return(
                       <tr>
                       <td align="center" scope="row" >{record.donorID}</td>
                       <td align="center">{record.donorName}</td>
                       <td align="center">{record.address}</td>
                       <td align="center">{record.phone}</td>
                       <td align="center">{record.email}</td>
                       <td align="center">{record.date}</td>
                       <td align="center">{record.amount}</td>
                       <td align="center">

                       <Link to={location=> `/editDonationsRoute/${record.donorID}`}>
                          <button id="editbtn" style={mystyle.editbtn} > Edit </button>
                        </Link>
                        {/* <Link style={styles.editbtn} to={location=> `/editDonationsRoute/ ${record.donorID}`} > Edit </Link> */}
                        </td>
                        
                        <td align="center">
                       <Link to='/Donors/donations'>
                          <button id="deletebtn"style={mystyle.deletebtn}> Delete </button>
                        </Link>
                        </td>
                      </tr>
                       )
                     })}   
                    
                  </tbody> 
                </Table>
              </TableContainer>
              </div>
           
  )
}