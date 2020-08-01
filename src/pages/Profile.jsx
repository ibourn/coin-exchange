import React from 'react';


import styled from 'styled-components';

const DivProfile = styled.div`
  height: 77vh;
  padding-top: 10%;

`;

const Profile = () => {
    
    return (
      <DivProfile>
      <h1 className="title">This is the Profile Page</h1>
      <article>
        
          <p>The user is logged in. You can have acces to balance, buy and sell. </p>
        
        <div className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum  efficitur. Aenean ac{" "}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </div>
      </article>
    </DivProfile>
    );

}

export default (Profile);
