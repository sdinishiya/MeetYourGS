// import React from 'react';
import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import {Box,Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(addeddate, materialid, materialname, quantity) {
//   return {addeddate, materialid, materialname, quantity };
// }

// const rows = [
//   createData('07/15/2021','O001', 'Edu lanka', '150'),
//   createData('08/15/2021','O002', 'Lets go', '120'),
//   createData('09/15/2021','O003', 'Kids day', '100'),

// ];

// <br></br>
export default function OtherResources() {
  const [searchTerm,setSearchTerm]=useState("");
  const [materialList,setmaterialList]=useState([])
  // const classes = useStyles();

  useEffect(()=>{
    axios.get("http://localhost:3001/othermaterials").then((response)=>{
      setmaterialList(response.data)
    })
  },[])
  return (
    
    <div ><br/>
    <div className='box-main'>
    <h1> Material Details</h1>
      <Box justifyContent="flex-start" ml={15}>
    <div className="searchbar">
       <input type="text" onChange={(e)=>{setSearchTerm(e.target.value);}} placeholder="Search"/>
       <SearchIcon  className='searchicon'/>
    </div>
    </Box>
    {/* <Box justifyContent="flex-end" ml={120}>
    <Link  to='/materials/AddMaterials2'> <button type="submit" onClick={OtherResources} id="submitBtn"style={mystyle.submitBtn}> Add Materials</button> </Link>
    <Link to='/materials/SupplyMaterials2'> <button type="submit" onClick={OtherResources} id="submitBtn"style={mystyle.submitBtn}> Supply Material</button></Link>
    </Box> */}
   
    </div><br/> 

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

)
}