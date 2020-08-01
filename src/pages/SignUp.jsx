import React from 'react';
import styled from 'styled-components';

const DivSignUp = styled.div`
  height: 77vh;
  padding-top: 10%;

`;

export default function SignUp(props) {
   /* const history = useHistory();
    const location = useLocation();
    const from = location.state.from;
    const backPath = '/' + from;*/
    return (
        <DivSignUp>
        <h1 className="">This is the SignUp Page</h1>
        <p>
        Either the user wants to sign up or he has been redirected from the profile page because he is not logged in.
        </p>
        
      </DivSignUp>
    );

}