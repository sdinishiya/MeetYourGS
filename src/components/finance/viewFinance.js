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
export default function Finance() {
  const [searchTerm,setSearchTerm]=useState("");
  const [transectionList,settransectionList]=useState([])
  // const classes = useStyles();

  useEffect(()=>{
    axios.get("http://localhost:3001/transaction").then((response)=>{
      settransectionList(response.data)
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
                <h1> Petty Cash Details</h1>
                  {/* <Box justifyContent="flex-start" ml={15}>
                <div className="searchbar">
                   <input type="text" onChange={(e)=>{setSearchTerm(e.target.value);}} placeholder="Search"/>
                   <SearchIcon  className='searchicon'/>
                </div>
                </Box> */}
                <Box justifyContent="flex-end" ml={120}>
                <Link  to='/finance/Addfund'> <button type="submit" onClick={Finance} id="submitBtn"style={mystyle.submitBtn}> Add Fund</button> </Link>
                <Link to='/finance/AddExpense'> <button type="submit" onClick={Finance} id="submitBtn"style={mystyle.submitBtn}> Add Expense</button></Link>
                </Box>
               
                </div><br/> 

                <Table hover responsive>
                  <thead className="tableheading">
                    <tr>
                      <td align = "center" scope="col"><b>Date</b></td>
                      <td align = "center" scope="col"><b>Receipt No</b></td>
                      <td align = "center" scope="col"><b>Description</b></td>
                      <td align = "center" scope="col"><b>Income</b></td>
                      <td align = "center" scope="col"><b>Expense</b></td>
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
                      return(
                       <tr>
                       <td  align = "center" scope="row">{record.date}</td>
                       <td align = "center" > {record.receiptno}</td>
                       <td align = "center" > {record.description}</td>
                       <td align = "center"> {record.income}</td>
                       <td align = "center"> {record.expense}</td>
                         
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