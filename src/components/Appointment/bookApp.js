import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function Booking() {
    const [bookID,setbookID] = useState("");
    const [nic,setNIC] = useState("");
    const [name,setName] = useState("");
    const [home_no,setNo] = useState("");
    const [address,setAddress] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [des,setDes] = useState("");

    const booking = ()=>{
      console.log(bookID);
       axios.post('http://localhost:3001/booking',{
        nic:nic,
        name:name,
        home_no:home_no,
        address:address,
        phone:phone,
        email:email,
        des:des,

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
        <h1 style={mystyle.formhead}> BOOK APPOINTMENTS </h1>
        <form >
          <div >

            <input type="text"style={mystyle.forminput}name="nic" onChange={(event)=>{setNIC(event.target.value);}} required placeholder="NIC*"/><br />
            <input type="text"style={mystyle.forminput}name="name " onChange={(event)=>{setName(event.target.value);}} required placeholder="Name*"/><br />
            <input type="int"style={mystyle.forminput}name="home_no" onChange={(event)=>{setNo(event.target.value);}} required placeholder="House No.*"/><br />
            <input type="text"style={mystyle.forminput}name="address" onChange={(event)=>{setAddress(event.target.value);}} required placeholder="Address*"/><br />
            <input type="int"style={mystyle.forminput}name="phone" onChange={(event)=>{setPhone(event.target.value);}} required placeholder="Telephone Number*"/><br />
            <input type="text"style={mystyle.forminput}name="email " onChange={(event)=>{setEmail(event.target.value);}} required placeholder="E-mail*"/><br />
            <input type="text"style={mystyle.forminput}name="des" onChange={(event)=>{setDes(event.target.value);}} placeholder="Topic"/><br />
            
          </div>

          <div display='flex' align='right'>

            <Link to='/Appointment/thankyou'>
              <button type="submit" onClick={booking} id="submitBtn"style={mystyle.submitBtn}> Book Slot</button>
            </Link>

            <Link to='/Appointment/bookApp'>
              <button type="submit"id="submitBtn"style={mystyle.closeBtn}> Cancel</button>
            </Link>
          </div>
          <br/> <br/>

        </form>
      </div>
    </div>

  )
}

export default Booking;