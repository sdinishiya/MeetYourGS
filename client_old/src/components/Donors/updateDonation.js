import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

function UpdateDonation() {
  const { donorID } = useParams();
  const [newdonorName, setNewdonorName] = useState("");
  const [newaddress, setNewAddress] = useState("");
  const [newphone, setNewPhone] = useState("");
  const [newemail, setNewEmail] = useState("");
  const [newamount, setNewAmount] = useState("");

  let history = useHistory();

  const [Dt, setDt] = useState([]);
  const [DonationLiSt, setDonationList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/donationview").then((response) => {
      setDonationList(response.data);
    });
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/donationdetails", {
      params: {
        donorID: donorID,
      },
    });

    setDt(response.data[0]);
    setNewdonorName(response.data[0].donorName);
    setNewAddress(response.data[0].address);
    setNewPhone(response.data[0].phone);
    setNewEmail(response.data[0].email);
    setNewAmount(response.data[0].amount);

    console.log(response.data[0]);
  };

  useEffect(() => {
    fetchData();
  }, [donorID]);

  const EditDon = (donorID) => {
    console.log("reach");
    console.log(donorID);
    axios
      .put("http://localhost:3001/edit-donations", {
        donorName: newdonorName,
        address: newaddress,
        phone: newphone,
        email: newemail,
        amount: newamount,
        donorID: donorID,
      })
      .then((response) => {
        console.log(Dt);
      });
    alert(" Details Updated successfully ");
    history.push("/Donors/donations");
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
        <h1 style={mystyle.formhead}> EDIT DONATION DETAILS </h1>
        <form>
          <div>
            {/* defaultValue={newName}  onChange={(event)=> {
                      setNewName(event.target.value); */}

            <input
              type="text"
              style={mystyle.forminput}
              name="donorName "
              defaultValue={newdonorName}
              onChange={(event) => {
                setNewdonorName(event.target.value);
              }}
              required
              placeholder="Donor Name*"
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
              placeholder="Address*"
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
              placeholder="Telephone Number*"
            />
            <br />
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
              type="int"
              style={mystyle.forminput}
              name="amount"
              defaultValue={newamount}
              onChange={(event) => {
                setNewAmount(event.target.value);
              }}
              required
              placeholder="Donation Amount*"
            />
            <br />
          </div>
          <div display="flex" align="right">
            <button
              onClick={() => EditDon(donorID)}
              id="submitBtn"
              style={mystyle.submitBtn}
            >
              {" "}
              Update
            </button>

            <Link to="/Donors/donations">
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

export default UpdateDonation;
