import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function AddSMS() {
    const [smsID,setsmsID] = useState("");
    const [topic,setTopic] = useState("");
    const [description,setDescription] = useState("");
    const [Date,setDate] = useState("");
    const [active_status,setActive_status] = useState("");

    const sms = ()=>{
      console.log(noticeID);
       axios.post('http://localhost:3001/addnotice',{
        topic: topic,
        description: description,
        expDate: expDate,
        active_status: active_status,

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
        <h1 style={mystyle.formhead}> ADD SMS MESSAGES TO BE SENT </h1>
        <form >
          <div >

            <input type="text"style={mystyle.forminput}name="topic " onChange={(event)=>{setTopic(event.target.value);}} required placeholder=" Topic *"/><br />
            <input type="text"style={mystyle.forminput}name="description" onChange={(event)=>{setDescription(event.target.value);}} required placeholder="Description*"/><br />
            <input type="date"style={mystyle.forminput}name="Date" onChange={(event)=>{setDate(event.target.value);}} required placeholder="Date*"/><br />
            <input type="int"style={mystyle.forminput}name="active_status" onChange={(event)=>{setActive_status(event.target.value);}} required placeholder="Status"/><br />
            
          </div>

          <div display='flex' align='right'>

            <Link to='#'>
              <button type="submit" onClick={notice} id="submitBtn"style={mystyle.submitBtn}> Add</button>
            </Link>

            <Link to='#'>
              <button type="submit"id="submitBtn"style={mystyle.closeBtn}> Cancel</button>
            </Link>
          </div>
          <br/> <br/>

        </form>
      </div>
    </div>

  )
}

export default AddSMS;