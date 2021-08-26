// import React from 'react';
// import '../../App.css';

// export default function login() {
//   return <h1 className='login'>Welcome to login Page </h1>;
// }
import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Navbar from '../Navbar';
import {AccountBox} from "../accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const login = () => {
return (
	<div> 
		 <Navbar />
	<div
	style={{
    
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh',
	}}
	>
	<h2> </h2>

	 <AppContainer>
      <AccountBox />
    </AppContainer>
	
	</div>
	<Footer />
	</div>
);
};

export default login;