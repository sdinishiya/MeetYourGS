import React, { useContext, useState } from "react";
import Axios from 'axios';
import "../../App.css";

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [fullnameReg, setFullnameReg] = useState("");
  const [addressReg, setAddressReg] = useState("");
  const [nicReg, setNicReg] = useState("");
  const [teleReg, setTelReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
 
  const signup = ()=>{
    Axios.post("http://localhost:3001/sign-up",
    {fullname: fullnameReg, 
      address: addressReg, 
      nic: nicReg, 
      telephone: teleReg,
      email: emailReg, 
      password: passwordReg, 
      //conPassword: conpassReg
    }).then((response)=>{
      console.log(response);
    });
  };
 
  return (
    <BoxContainer>
      <FormContainer>
      <Input type="text" placeholder="Full Name" onChange={(e) => { setFullnameReg(e.target.value) }} />
        <Input type="text" placeholder="Permanent Address" onChange={(e) => { setAddressReg(e.target.value) }} />
        <Input type="text" placeholder="NIC" onChange={(e) => { setNicReg(e.target.value) }} />
        <Input type="text" placeholder="Telephone No" onChange={(e) => { setTelReg(e.target.value) }} />
        <Input type="email" placeholder="Email" onChange={(e) => { setEmailReg(e.target.value) }} />
        <Input type="password" placeholder="Password" onChange={(e) => { setPasswordReg(e.target.value) }} />
        <Input type="password" placeholder="Confirm Password" /*onChange={(e) => { setConpassReg(e.target.value) }}*/ />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={signup}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Sign In
        </BoldLink>
      </MutedLink>
      <br></br>
      <br></br>
    </BoxContainer>
  );

}
