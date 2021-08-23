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
  bookbtn: {
      marginTop: '10px',
      width: '125px',
      height: '30px',
      fontSize: '14px',
      backgroundColor: '#f57c00',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      marginRight: '30px'
  }
};

export default function UserBooking() {
  const [searchTerm,setSearchTerm]=useState("");
  const [bookList,setbookList]=useState([])
  // const classes = useStyles();

  useEffect(()=>{
    axios.get("http://localhost:3001/book").then((response)=>{
      setbookList(response.data)
    })
  },[])


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
                <h1> Available Appointment Time Slots</h1>
                </div><br/> 

                {/* <Table  bordered hover responsive> */}
              <TableContainer>
                <Table hover responsive>
                  <thead className="tableheading">
                    <tr>
                      <td align="center" scope="col"><b>GS Name</b></td>
                      <td align="center" scope="col"><b>Date</b></td>
                      <td align="center" scope="col"><b>Time Duration </b></td>
                      <td align="center" scope="col"><b>Description</b></td>
                      <td align="center" scope="col"><b></b></td>
                    </tr>
                  </thead>
                 <tbody className="tablebody">
                     {bookList.filter(val=>{if(searchTerm===""){
                       return val;
                     }else if(
                       val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.email.toLowerCase().includes(searchTerm.toLowerCase())) 
                     {
                       return val
                     }
                    }).map((record)=>{
                      const dt = new Date(record.date);
                      const year = dt.getFullYear() + '/';
                      const month = ('0' + (dt.getMonth() + 1)).slice(-2) + '/';
                      const day = ('0' + dt.getDate()).slice(-2);

                      return(
                       <tr>
                       <td align="center" scope="row" >{record.gsname}</td>
                       <td align="center">{year + month + day}</td>
                       <td align="center">{record.startTime} - {record.endTime} </td>
                       <td align="center">{record.description}</td>
                       <td align="center">
                        <Link to={location=> `/userBookingRoute/${record.appointID}`}>
                          <button id="bookbtn" style={mystyle.bookbtn} > Book </button>
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