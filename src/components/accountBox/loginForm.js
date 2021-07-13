import React, { useContext, useState } from "react";
import Axios from 'axios';
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
// eslint-disable-next-line no-unused-vars
import login from "../pages/login";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [loginStatus, setLoginStatus] = useState("");

    const login = ()=>{
    Axios.post("http://localhost:3001/login",
    { email: email, 
      password: password, 
      
    }).then((response) => {

      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        setLoginStatus(response.data.message1);
      }
      
    });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}  />
        <Input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={login} >Sign In</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign Up
        </BoldLink>
      </MutedLink>

    <h1>{loginStatus}</h1>

    </BoxContainer>
  );
}
