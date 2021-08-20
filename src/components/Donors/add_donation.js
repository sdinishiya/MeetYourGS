import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function AddDonor() {
    const [donorID,setdonorID] = useState("");
    const [donorName,setdonorName] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [date,setDate] = useState("");
    const [amount,setAmount] = useState("");

    const donor = ()=>{
      console.log(donorID);
       axios.post('http://localhost:3001/donor',{
        donorName:donorName,
        address:address,
        phone:phone,
        email:email,
        date:date,
        amount:amount,

        }).then(()=>{
           console.log("success");
         });
    };

  const mystyle = {
    formstep: {
      fontsize: '35px',
      textalign: 'center',
      color: '#23750a',
    },

    formbox: {
      backgroundColor: 'white',
      width: '50%',
      textalign: 'center',
      marginTop: '10px',
      height: 'full',
      boxShadow: "2px 2px 5px  2px #9E9E9E",
      padding : "1vh",
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
      width: '60%',
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
      backgroundColor: '#4caf50',
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
      backgroundColor: '#f44336',
      transition: '1s background ease',
      cursor: 'pointer',
      border: 'none',
      borderRadius: '5px',
      color: 'white',
      marginRight: '150px'
    }

  };

  return (
    
    <div align='center'>
      <br/><br/>
      <div style={mystyle.formbox}>
        <h1 style={mystyle.formhead}> ADD DIRECT DONATION DETAILS </h1>
        <form >
          <div >

            
            <input type="text"style={mystyle.forminput}name="donorName " onChange={(event)=>{setdonorName(event.target.value);}} required placeholder="Donor Name*"/><br />
            <input type="text"style={mystyle.forminput}name="address" onChange={(event)=>{setAddress(event.target.value);}} required placeholder="Address*"/><br />
            <input type="int"style={mystyle.forminput}name="phone" onChange={(event)=>{setPhone(event.target.value);}} required placeholder="Telephone Number*"/><br />
            <input type="text"style={mystyle.forminput}name="email" onChange={(event)=>{setEmail(event.target.value);}} required placeholder="E-mail Address"/><br />
            <input type="date"style={mystyle.forminput}name="date " onChange={(event)=>{setDate(event.target.value);}} required placeholder="Date*"/><br />
            <input type="int"style={mystyle.forminput}name="amount" onChange={(event)=>{setAmount(event.target.value);}} required placeholder="Donation Amount*"/><br />
            
            
          </div>

          <div display='flex' align='right'>

            <Link to='/Donors/donations'>
              <button type="submit" onClick={donor} id="submitBtn"style={mystyle.submitBtn}> Add</button>
            </Link>

            <Link to='/Donors/add_donation'>
              <button type="submit"id="submitBtn"style={mystyle.closeBtn}> Cancel</button>
            </Link>
          </div>
          <br/> <br/>

        </form>
      </div>
    </div>

  )
}

export default AddDonor;