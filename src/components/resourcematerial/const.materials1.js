// import React from 'react';
import React, { useState, useEffect } from "react";
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Box,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { Link } from 'react-router-dom';
// import {Box,Button} from '@material-ui/core';


// import { Search as SearchIcon } from 'react-feather';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(addeddate, materialid, materialname, quantity) {
//   return { addeddate, materialid, materialname, quantity };
// }

// const rows = [
//   createData('06/15/2021', 'C001', 'Bricks', '150 Bricks'),
//   createData('06/15/2021', 'C002', 'Sand', '10 Cubes'),
//   createData('06/15/2021', 'C003', 'Construction Iron Rod (10mm)', '100 Rods'),

// ];

// <br></br>
// export default function ConstResources1() {
//   const classes = useStyles();
export default function ConstResources() {
  const [searchTerm,setSearchTerm]=useState("");
  const [materialList,setmaterialList]=useState([])
  // const classes = useStyles();

  useEffect(()=>{
    axios.get("http://localhost:3001/materials").then((response)=>{
      setmaterialList(response.data)
    })
  },[])

  return (
    
    <div>
      <br />
      <div className='box-main'></div>
      <h1> Construction Material Stock Details</h1>
      <Box justifyContent="flex-start" ml={15}>
                <div className="searchbar">
                   <input type="text" onChange={(e)=>{setSearchTerm(e.target.value);}} placeholder="Search"/>
                   <SearchIcon  className='searchicon'/>
                </div>
                </Box>
    <br />
    <Table hover responsive>
                  <thead className="tableheading">
                    <tr>
                      <td align = "center" scope="col"><b>Added Date</b></td>
                      <td align = "center" scope="col"><b>Material ID</b></td>
                      <td align = "center" scope="col"><b>Material Name</b></td>
                      <td align = "center" scope="col"><b>Quantity</b></td>
                      {/* <td align = "center"><b>Action</b></td> */}
                    </tr>
                  </thead>
                 <tbody className="tablebody">
                     {materialList.filter(val=>{if(searchTerm===""){
                       return val;
                     }else if(
                       val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.email.toLowerCase().includes(searchTerm.toLowerCase())) 
                     {
                       return val
                     }
                    }).map((record)=>{
                      return(
                       <tr>
                       <td align = "center" scope="row">{record.addeddate}</td>
                       <td align = "center" > {record.materialid}</td>
                       <td align = "center"> {record.materialname}</td>
                       <td align = "center"> {record.quantity}</td>
                       {/* <td align = "center">
                         
                       <Box><Link to='/UpdateMaterial' onClick={()=>{updateMaterial(record.materialid)}} id="submitBtn"style={mystyle.EditBtn}>Edit</Link>
                       <Link onClick={()=>{deleteMaterial(record.id)}} id="submitBtn"style={mystyle.DeleteBtn}> Delete </Link></Box>
                        </td> */}
                      </tr>
                       )
                      })} 
                  </tbody> 
                </Table>
      </div>
  );
}
