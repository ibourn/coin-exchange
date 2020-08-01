import React from 'react';

import styled from 'styled-components';

const DivAbout = styled.div`
  height: 77vh;
  padding-top: 2vh;

`;

const Li = styled.li`
list-style: none;
font-size: 0.9rem;
`;

export default function About(props) {
  return (
    <DivAbout>
      <p>
        This app is a work in the context of <a href="https://academy.ivanontech.com/">Ivan on Tech Academy</a> courses.
      </p>


      <ul>Themes of the courses :
        <Li>Development environment for React</Li>
        <Li>Class based and functional Components</Li>
        <Li>Hooks : useState and useEffect</Li>
        <Li>Api communication using axios and coinpaprika.com</Li>
        <Li>Theming with bootstrap and styled components</Li>
        <Li>Git and Github usage</Li>
      </ul>

      <ul>Extra learning:
        <Li>Hook : useContext</Li>
        <Li>Router, Switch, Navlink, Redirect, nested routes</Li>
      </ul>

      <p>
        It's my first React app. The login process is superficial as there's no backend,
        the only purpose is to simulate the process and use useContext.
      </p>
      <p>You need to login to access Buy and Sell. {'\n '}
        You can refresh manually a coin price with 'lazy refresh' or have all the coins refreshed each 20 secondes.{'\n '}
        When refreshing (it could take few minutes) prices blink if there's a change. 
        By clicking a coin name you will get the last tweets about the coin.</p>

    </DivAbout>

  );

}