
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

function AddFund() {

    const [date,setdate] = useState("");
    const [receiptno,setreceiptno] = useState("");
    const [description,setdescription] = useState("");
    const [income,setincome] = useState("");
    // const [expense,setexpense] = useState("");
    // const [materialList,setmaterialList] = useState([]);
    const history  = useHistory();

    const add_fund = (e)=>{
      e.preventDefault();
      console.log(receiptno);
       axios.post('http://localhost:3001/financecreate',{
        date:date,
        receiptno:receiptno,
        description:description,
        income:income,

        }).then(()=>{
           console.log("success");
           history.push("/finance/viewFinance");

         });
    };
  //   const getMaterials = () => {
  //     axios.get("http://localhost:3001/materials").then((response)=>{
  //     console.log(response);
  //     setmaterialList(response.data)
  //   });
  // };

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
    <div align="center">
      <div style={mystyle.formbox}>
        <h1 style={mystyle.formhead}> Add Received Cash </h1>
        <form >
          <div >

            <input type="date"style={mystyle.forminput}name="Date" onChange={(event)=>{setdate(event.target.value);}} required placeholder="Date"/><br />
            <input type="text"style={mystyle.forminput}name="Receipt No" onChange={(event)=>{setreceiptno(event.target.value);}} required placeholder="Receipt No...."/><br />
            <input type="text"style={mystyle.forminput}name="Description" onChange={(event)=>{setdescription(event.target.value);}} required placeholder="Description...."/><br />
            <input type="text"style={mystyle.forminput}name="Income" onChange={(event)=>{setincome(event.target.value);}} required placeholder="Amount...."/><br />    
          </div>
          
          <div display='flex' align='right'>

            {/* <Link to='/finance/viewFinance'> */}
              <button type="submit" onClick={add_fund} id="submitBtn"style={mystyle.submitBtn}> Add</button>
            {/* </Link>  */}

            <Link to='/finance/viewFinance'>
              <button type="submit"id="submitBtn"style={mystyle.closeBtn}> Cancel</button>
            </Link>
          </div>


        </form>

      </div>
  
    </div>

  )
}

export default AddFund;