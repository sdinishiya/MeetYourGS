import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import {Table} from 'react-bootstrap';

function New_Materials() {
    const [materialid,setmaterialid] = useState("");
    const [materialname,setmaterialname] = useState("");
    const history = useHistory();
    const [materialList,setmaterialList] = useState([]);
    const [searchTerm,setSearchTerm]=useState("");
    
    const new_Materials = (e)=>{
      e.preventDefault();
      console.log(materialid);
       axios.post('http://localhost:3001/createnew',{
        materialname:materialname,


        }).then(()=>{
           console.log("success");
           history.push("/materials/Addnewmaterial");
         });
    };

    useEffect(()=>{
        axios.get("http://localhost:3001/newmaterial").then((response)=>{
          setmaterialList(response.data)
        })
      },[])

    //   const [modal, setModal] = useState(false);
 
    //   const toggleModal = () => {
    //     setModal(!modal);
    //   };

  const mystyle = {
    formstep: {
      fontsize: '35px',
      textalign: 'center',
      color: '#23750a',
    },

    formbox: {
      backgroundColor: 'white',
      width: '60%',
      textalign: 'center',
      marginTop: '10px',
      height: 'full',
      boxShadow: "2px 2px 5px  2px #9E9E9E",
      padding : "2vh",
      borderRadius : "5px"
    },
    popupbox: {
      position: 'fixed',
      background: '#00000050',
      width: '75vh',
      height: '75vh',
      top: '12vh',
      left: '90vh',
    },
    forminput: {

      width: '70%',
      padding: '10px 10px',
      margin: '8px 0',
      display: 'inline - block',
      border: '1px solid #C0C0C0',
      borderRadius: '5px',
      height: '40px'
    },
    formhead: {
      paddingTop: '50px',
      paddingBottom: '20px'
    },
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
    closeBtn: {
      marginTop: '20px',
      width: '145px',
      height: '40px',
      fontSize: '18px',
      backgroundColor: 'red',
      transition: '1s background ease',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      marginRight: '150px'
    }


  };

  return (
    <div>
        <div align='center'>
        <div style={mystyle.formbox}>
            <h1 style={mystyle.formhead}> Add New Construction Material </h1>
            <form >
            <div >
                <input type="text"style={mystyle.forminput}name="Material Name" onChange={(event)=>{setmaterialname(event.target.value);}} required placeholder="Material Name...."/><br />
            </div>

            <div display='flex' align='right'>

                <button type="submit" onClick={new_Materials} id="submitBtn"style={mystyle.submitBtn}> Add</button>


                <Link to='/resourcematerial/const.materials'>
                <button type="submit"id="submitBtn"style={mystyle.closeBtn}> Cancel</button>
                </Link>
            </div>
            </form>
        </div>
        </div>
        <br/>
        <br/>
        <Table hover responsive>
                  <thead className="tableheading">
                    <tr>
                      <td align = "center" scope="col"><b>Material ID</b></td>
                      <td align = "center" scope="col"><b>Material Name</b></td>
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
                       <td align = "center" > {record.materialid}</td>
                       <td align = "center"> {record.materialname}</td>

                      </tr>
                       )
                     })}   
                         
                    
                      
                    
                  </tbody> 
                </Table>
    </div>
  )
}

export default New_Materials;