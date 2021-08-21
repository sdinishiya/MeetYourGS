import React, { useState, useEffect } from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import {Box,Button} from '@material-ui/core';
// import { IconButton } from '@material-ui/core';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import { Search as SearchIcon } from 'react-feather';

const mystyle = {
  submitBtn: {
    marginTop: '20px',
    width: '145px',
    height: '40px',
    fontSize: '18px',
    backgroundColor: '#0A6466',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    marginRight: '30px'
  },

  DeleteBtn: {
    marginTop: '20px',
    padding: '10px',
    width: '145px',
    height: '40px',
    fontSize: '14px',
    backgroundColor: '#d32f2f',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    // marginRight: '30px'
  },

  EditBtn: {
    marginTop: '20px',
    padding: '10px',
    width: '145px',
    height: '40px',
    fontSize: '14px',
    backgroundColor: '#1976d2',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    marginRight: '30px'
  }
  
};

export default function AgriResources() {
  const [searchTerm,setSearchTerm]=useState("");
  const [materialList,setmaterialList]=useState([])
  // const classes = useStyles();

  useEffect(()=>{
    axios.get("http://localhost:3001/agrimaterials").then((response)=>{
      setmaterialList(response.data)
    })
  },[])

  const deleteMaterial =(materialid)=>{
    axios.delete(`http://localhost:3001/delete/${materialid}`);
  }

  const [newName,setNewName]=useState("");
  const updateMaterial =(materialid)=>{
    axios.put("http://localhost:3001/update",{
      id:materialid,
      name:newName,
    });
    setNewName("")
  };

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
                <h1> Material Details</h1>
                  <Box justifyContent="flex-start" ml={15}>
                <div className="searchbar">
                   <input type="text" onChange={(e)=>{setSearchTerm(e.target.value);}} placeholder="Search"/>
                   <SearchIcon  className='searchicon'/>
                </div>
                </Box>
                <Box justifyContent="flex-end" ml={120}>
                <Link  to='/materials/AddMaterials1'> <button type="submit" onClick={AgriResources} id="submitBtn"style={mystyle.submitBtn}> Add Materials</button> </Link>
                <Link to='/materials/SupplyMaterials1'> <button type="submit" onClick={AgriResources} id="submitBtn"style={mystyle.submitBtn}> Supply Material</button></Link>
                </Box>
               
                </div><br/> 

                <Table hover responsive>
                  <thead className="tableheading">
                    <tr>
                      <td align = "center" scope="col"><b>Added Date</b></td>
                      <td align = "center" scope="col"><b>Material ID</b></td>
                      <td align = "center" scope="col"><b>Material Name</b></td>
                      <td align = "center" scope="col"><b>Quantity</b></td>
                      <td align = "center"><b>Action</b></td>
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
                       <td align = "center">
                         
                       <Box><Link to='/UpdateMaterial' onClick={()=>{updateMaterial(record.materialid)}} id="submitBtn"style={mystyle.EditBtn}>Edit</Link>
                       <Link onClick={()=>{deleteMaterial(record.id)}} id="submitBtn"style={mystyle.DeleteBtn}> Delete </Link></Box>
                        </td>
                      </tr>
                       )
                     })}   
                         
                    
                      
                    
                  </tbody> 
                </Table>
              </div>
           
  )
}

