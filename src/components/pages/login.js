// import React from 'react';
// import '../../App.css';

// export default function login() {
//   return <h1 className='login'>Welcome to login Page </h1>;
// }
import React from 'react';
import styled from 'styled-components';
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
	<div
	style={{
    
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh',
	}}
	>
	<h1>Welcome to Meet Your GS Login</h1>
	 <AppContainer>
      <AccountBox />
    </AppContainer>
	</div>
);
};

export default login;
