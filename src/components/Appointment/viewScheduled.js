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

const mystyle = {
    pageBtn: {
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
}
};

export default function AppointmentSchedule() {
  const [searchTerm,setSearchTerm]=useState("");
  const [viewList,setviewList]=useState([])
  // const classes = useStyles();

  useEffect(()=>{
    axios.get("http://localhost:3001/appconfirm").then((response)=>{
        setviewList(response.data)
    })
  },[])

  // const [newName,setNewName]=useState("");
  // const updateMaterial =(materialid)=>{
  //   axios.put("http://localhost:3001/update",{
  //     id:materialid,
  //     name:newName,
  //   });
  //   setNewName("")
  // };

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
                <h1> Scheduled Appointment Details</h1>
                
                <Box justifyContent="flex-end" ml={120}>
                <Link  to='/Appointment/schedule'> <button  id="pageBtn"style={mystyle.submitBtn}> Schedule Appointments </button> </Link>
                </Box>
                </div><br/> 

                {/* <Table  bordered hover responsive> */}
              <TableContainer>
                <Table hover responsive>
                  <thead className="tableheading">
                    <tr>
                      <td align="center" scope="col"><b>Appointment ID</b></td>
                      <td align="center" scope="col"><b>Villager NIC</b></td>
                      <td align="center" scope="col"><b>Villager Name</b></td>
                      <td align="center" scope="col"><b>Phone</b></td>
                      <td align="center" scope="col"><b>Email</b></td>
                      <td align="center" scope="col"><b>Description</b></td>
                      <td align="center" scope="col"><b>Status</b></td>

                    </tr>
                  </thead>
                 <tbody className="tablebody">
                     {viewList.filter(val=>{if(searchTerm===""){
                       return val;
                     }else if(
                       val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.email.toLowerCase().includes(searchTerm.toLowerCase())) 
                     {
                       return val
                     }
                    }).map((record)=>{
                      return(
                       <tr>
                       <td align="center" scope="row" >{record.bookID}</td>
                       <td align="center">{record.nic}</td>
                       <td align="center">{record.name}</td>
                       <td align="center">{record.phone}</td>
                       <td align="center">{record.email}</td>
                       <td align="center">{record.des}</td>
                       <td align="center">{record.status}</td>
                      </tr>
                       )
                     })}   
                    
                  </tbody> 
                </Table>
              </TableContainer>
              </div>
            )
        } 