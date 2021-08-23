// import React from 'react';
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
import {Table} from 'react-bootstrap';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Box,Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import axios from 'axios';

// const useStyles = makeStyles({
  // table: {
  //   minWidth: 650,
  // },
  const mystyle = {
  submitBtn: {
    marginTop: '20px',
    width: '145px',
    height: '40px',
    fontSize: '18px',
    backgroundColor: '#048a0d',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    marginRight: '30px'
  },

  // donateBtn: {
  //   marginTop: '20px',
  //   width: '200px',
  //   height: '40px',
  //   fontSize: '18px',
  //   backgroundColor: '#048a0d',
  //   cursor: 'pointer',
  //   border: 'none',
  //   borderRadius: '5px',
  //   color: 'white',
  //   marginRight: '30px'
  // },
};

// function createData(date, receiptno, description, income, expense) {
//   return { date, receiptno, description, income, expense };
// }

// const rows = [
//   createData('05/08/2021', 'V001', 'Donation for Mushroom project', '50000', ''),
//   createData('05/08/2021', 'V002', 'Government Fund Allocation for distributing seeds', '75550', ''),
//   createData('06/08/2021', 'V003', 'Donation for Mushroom project', '75000', ''),
//   createData('08/08/2021', 'V004', 'Expense on Mushroom project', '', '30000'),
//   createData('08/08/2021', 'V001', 'Career Guidance Program', '', '12000'),
// ];

<br></br>
export default function Fund() {
  const [searchTerm,setSearchTerm]=useState("");
  const [transectionList,settransectionList]=useState([])
  // const classes = useStyles();

  useEffect(()=>{
    axios.get("http://localhost:3001/funds").then((response)=>{
      settransectionList(response.data)
    })
  },[])

  const [modal, setModal] = useState(false);

  const getTotal = () => {
    let total = 0;
    transectionList.forEach(tr => {
      if (tr.debit > 0) {
        total += tr.debit;
      } else {
        total -= tr.credit;
      }
    })
    return total;
  }
 
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
                <h1> Project Fund Account</h1>
                  {/* <Box justifyContent="flex-start" ml={15}>
                <div className="searchbar">
                   <input type="text" onChange={(e)=>{setSearchTerm(e.target.value);}} placeholder="Search"/>
                   <SearchIcon  className='searchicon'/>
                </div>
                </Box> */}
                <Box justifyContent="flex-end" ml={140}>
                <Link  to='/finance/Addprojectfund'> <button type="submit" onClick={Fund} id="submitBtn"style={mystyle.submitBtn}> Fund Received</button> </Link>
                <Link to='/finance/AllocateProjectfund'> <button type="submit" onClick={Fund} id="submitBtn"style={mystyle.submitBtn}> Fund Allocation </button></Link>
                <tr> 
                 <td></td>
                 <td></td>
                 <td><b>Cash in Hand: {getTotal()}</b></td>
                </tr>
                </Box>
               
                </div><br/> 

                <Table hover responsive>
                  <thead className="tableheading">
                    <tr>
                      <td align = "center" scope="col"><b>Date</b></td>
                      <td align = "center" scope="col"><b>Fund ID</b></td>
                      <td align = "center" scope="col"><b>Description</b></td>
                      <td align = "center" scope="col"><b>Debit</b></td>
                      <td align = "center" scope="col"><b>Credit</b></td>
                    </tr>
                  </thead>
                 <tbody className="tablebody">
                     {transectionList.filter(val=>{if(searchTerm===""){
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
                       <td align="center" scope="row">{year + month + day}</td>
                       <td align = "center" > {record.fundID}</td>
                       <td align = "center" > {record.description}</td>
                       <td align = "center"> {record.debit}</td>
                       <td align = "center"> {record.credit}</td>
                         
                       {/* <Box><Link to='/consts_resource_edit' onClick={()=>{MaterialEdit(record.materialid)}} id="submitBtn"style={mystyle.EditBtn}>Edit</Link>
                       <Link onClick={()=>{deleteMaterial(record.id)}} id="submitBtn"style={mystyle.DeleteBtn}> Delete </Link></Box>
                        </td> */}
                      </tr>
                       )
                     })}   
                         
                    
                      
                    
                  </tbody> 
                </Table>
              </div>
           
  )
}