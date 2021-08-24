import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from "axios";
import GSFooter from '../GSFooter';
import GSNavbar from '../gs_navbar';

function Schedule() {
    const [appointID,setID] = useState("");
    const [gsname,setName] = useState("");
    const [date,setDate] = useState("");
    const [startTime,setStartTime] = useState("");
    const [endTime,setEndTime] = useState("");
    const [description,setDescription] = useState("");
    const history  = useHistory();

    const schedule = ()=>{
      console.log(appointID);

      const d1 = new Date();
      const d2 = new Date(date);
      if (d2.getTime() < d1.getTime()) {
        alert("Date must be greater than today");
        return;
      }

       axios.post('http://localhost:3001/schedule',{
        gsname:gsname,
        date:date,
        startTime: startTime,
        endTime:endTime,
        description:description,

        }).then(()=>{
           console.log("success");
           //history.push("/Appointment/viewScheduled");
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
    <div>
       <GSNavbar />
    <div align='center'>
      <br/><br/>
      <div style={mystyle.formbox}>
        <h1 style={mystyle.formhead}> SCHEDULE APPOINTMENTS </h1>
        <form >
          <div >

            <input type="text"style={mystyle.forminput}name="gsname" onChange={(event)=>{setName(event.target.value);}} required placeholder="GS Name"/><br />
            <input type="date"style={mystyle.forminput}name="date " onChange={(event)=>{setDate(event.target.value);}} required placeholder="Date"/><br />
            <input type="time"style={mystyle.forminput}name="startTime" onChange={(event)=>{setStartTime(event.target.value);}} required placeholder="Start Time"/><br />
            <input type="time"style={mystyle.forminput}name="endTime" onChange={(event)=>{setEndTime(event.target.value);}} required placeholder="End Time"/><br />
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
    <br /> 
    {/* <GSFooter /> */}
  </div>


  )
}

export default Schedule;