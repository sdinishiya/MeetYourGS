import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function thank() {

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
    hbtn: {
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
    }


  };

  return (
    
    <div align='center'>
      <br/><br/>
      <div style={mystyle.formbox}>
        <h1 style={mystyle.formhead}> Thank You For the Booking!</h1>
        <p style={mystyle.formhead}> We have successfully recieved Your Appointment Booking, We will confirm with an E-mail.</p>
        <form >

          <div display='flex' align='right'>

            <Link to='/'>
              <button id="hbtn"style={mystyle.hbtn}> Back to Home </button>
            </Link>
          </div>
          <br/> <br/>

        </form>
      </div>
    </div>

  )
}

export default thank;