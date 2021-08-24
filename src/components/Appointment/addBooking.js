import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function AddBooking() {
  const { appointID } = useParams();
  const [newnic, setNewNic] = useState("");
  const [newname, setNewName] = useState("");
  const [newhome_no, setNewHome_no] = useState("");
  const [newaddress, setNewAddress] = useState("");
  const [newphone, setNewPhone] = useState("");
  const [newemail, setNewEmail] = useState("");
  const [newdes, setNewDes] = useState("");

  let history = useHistory();

  const [Dt, setDt] = useState([]);
  const [BookingList, setBookingList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/appview").then((response) => {
      setBookingList(response.data);
    });
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/appdetails", {
      params: {
        appointID: appointID,
      },
    });

    setDt(response.data[0]);
    setNewNic(response.data[0].nic);
    setNewName(response.data[0].name);
    setNewHome_no(response.data[0].home_no);
    setNewAddress(response.data[0].address);
    setNewPhone(response.data[0].phone);
    setNewEmail(response.data[0].email);
    setNewDes(response.data[0].des);

    console.log(response.data[0]);
  };

  useEffect(() => {
    fetchData();
  }, [appointID]);

  const AddBook = (appointID) => {
    console.log("reach");
    console.log(appointID);
    axios
      .put("http://localhost:3001/add-app-booking", {
        nic: newnic,
        name: newname,
        home_no: newhome_no,
        address: newaddress,
        phone: newphone,
        email: newemail,
        des: newdes,
        appointID: appointID,
      })
      .then((response) => {
        console.log(Dt);
      });
    alert(" Appointment Booked successfully ");
    history.push("/Appointment/thankyou");
  };

  const mystyle = {
    formstep: {
      fontsize: "35px",
      textalign: "center",
      color: "#23750a",
    },

    formbox: {
      backgroundColor: "white",
      width: "50%",
      textalign: "center",
      marginTop: "10px",
      height: "full",
      boxShadow: "2px 2px 5px  2px #9E9E9E",
      padding: "1vh",
      borderRadius: "5px",
    },
    popupbox: {
      position: "fixed",
      background: "#00000050",
      width: "75vh",
      height: "75vh",
      top: "12vh",
      left: "90vh",
    },
    forminput: {
      width: "60%",
      padding: "10px 10px",
      margin: "8px 0",
      display: "inline - block",
      border: "1px solid #C0C0C0",
      borderRadius: "5px",
      height: "40px",
    },
    formhead: {
      paddingTop: "50px",
      paddingBottom: "20px",
    },
    submitBtn: {
      marginTop: "20px",
      width: "145px",
      height: "40px",
      fontSize: "18px",
      backgroundColor: "#4caf50",
      cursor: "pointer",
      border: "none",
      borderRadius: "5px",
      color: "white",
      marginRight: "30px",
    },
    closeBtn: {
      marginTop: "20px",
      width: "145px",
      height: "40px",
      fontSize: "18px",
      backgroundColor: "#f44336",
      transition: "1s background ease",
      cursor: "pointer",
      border: "none",
      borderRadius: "5px",
      color: "white",
      marginRight: "150px",
    },
  };

  return (
    <div align="center">
      <br />
      <br />
      <div style={mystyle.formbox}>
        <h1 style={mystyle.formhead}> MAKE APPOINTMENT BOOKINGS </h1>
        <form>
          <div>
            <input
              type="text"
              style={mystyle.forminput}
              name="nic "
              defaultValue={newnic}
              onChange={(event) => {
                setNewNic(event.target.value);
              }}
              required
              placeholder="NIC*"
            />
            <br />
            <input
              type="text"
              style={mystyle.forminput}
              name="name"
              defaultValue={newname}
              onChange={(event) => {
                setNewName(event.target.value);
              }}
              required
              placeholder="Name*"
            />
            <br />
            <input
              type="text"
              style={mystyle.forminput}
              name="home_no"
              defaultValue={newhome_no}
              onChange={(event) => {
                setNewHome_no(event.target.value);
              }}
              required
              placeholder="House No. / House Name*"
            />
            <br />
            <input
              type="text"
              style={mystyle.forminput}
              name="address"
              defaultValue={newaddress}
              onChange={(event) => {
                setNewAddress(event.target.value);
              }}
              required
              placeholder="Address"
            />
            <br />
            <input
              type="int"
              style={mystyle.forminput}
              name="phone"
              defaultValue={newphone}
              onChange={(event) => {
                setNewPhone(event.target.value);
              }}
              required
              placeholder="Contact No.*"
            />
            <input
              type="text"
              style={mystyle.forminput}
              name="email"
              defaultValue={newemail}
              onChange={(event) => {
                setNewEmail(event.target.value);
              }}
              required
              placeholder="E-mail Address"
            />
            <br />
            <input
              type="text"
              style={mystyle.forminput}
              name="des"
              defaultValue={newdes}
              onChange={(event) => {
                setNewDes(event.target.value);
              }}
              required
              placeholder="Additional Note If Any"
            />
            <br />
          </div>
          <div display="flex" align="right">
            <button
              onClick={() => AddBook(appointID)}
              id="submitBtn"
              style={mystyle.submitBtn}
            >
              {" "}
              Submit
            </button>

            <Link to="/Appointment/userBooking">
              <button id="submitBtn" style={mystyle.closeBtn}>
                {" "}
                Cancel
              </button>
            </Link>
          </div>
          <br /> <br />
        </form>
      </div>
    </div>
  );
}

export default AddBooking;
