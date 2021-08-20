import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function Schedule() {
    const [appID,setID] = useState("");
    const [gsname,setName] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [description,setDescription] = useState("");

    const schedule = ()=>{
      console.log(appID);
       axios.post('http://localhost:3001/schedule',{
        gsname:gsname,
        date:date,
        time:time,
        description:description,

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
      width: '60%',
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
        <h1 style={mystyle.formhead}> SCHEDULE APPOINTMENTS </h1>
        <form >
          <div >

            <input type="text"style={mystyle.forminput}name="gsname" onChange={(event)=>{setName(event.target.value);}} required placeholder="GS Name"/><br />
            <input type="date"style={mystyle.forminput}name="date " onChange={(event)=>{setDate(event.target.value);}} required placeholder="Date"/><br />
            <input type="time"style={mystyle.forminput}name="time" onChange={(event)=>{setTime(event.target.value);}} required placeholder="Time"/><br />
            <input type="text"style={mystyle.forminput}name="description" onChange={(event)=>{setDescription(event.target.value);}} required placeholder="Description"/><br />
            
          </div>

          <div display='flex' align='right'>

            <Link to='/Appointment/appointments'>
              <button type="submit" onClick={schedule} id="submitBtn"style={mystyle.submitBtn}> Add Slot</button>
            </Link>

            <Link to='/Appointment/schedule'>
              <button type="submit"id="submitBtn"style={mystyle.closeBtn}> Cancel</button>
            </Link>
          </div>
          <br/> <br/>

        </form>

      </div>
    </div>

  )
}

export default Schedule;