import React from 'react';

import styled from 'styled-components';

const DivAbout = styled.div`
  height: 77vh;
  padding-top: 10%;

`;

const Li = styled.li`
list-style: none;
`;

export default function About(props) {
    return (
        <DivAbout>
        <h1 className="">This is the About Page</h1>
        <p>
          This app is a work in the context of <a href="https://academy.ivanontech.com/">Ivan on Tech Academy</a> courses.
          </p>
    

        <ul>Themes of the courses :
          <Li>Introduction and first React App</Li>
          <Li>Development environment for React</Li>
          <Li>Class based and functional Components</Li>
          <Li>Hooks : useState and useEffect</Li>
          <Li>Api communication using axios</Li>
          <Li>Theming with bootstrap and styled components</Li>
          <Li>Git and Github usage</Li>
        </ul>

        <ul>Extra learning:
          <Li>Hook : useContext</Li>
          <Li>Router, Switch, Navlink</Li>
          </ul>

          <p> 
It's my first React app. The login process is superficial as there's no backend,

  the only purpose is to simulate the process and use useContext.
</p>
      </DivAbout>

    );

}