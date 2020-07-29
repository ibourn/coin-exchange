import React from 'react';
import { useParams } from "react-router-dom";

import styled from 'styled-components';



export default function Profile(props) {
    const { name } = useParams();
    return (
      <div>
        <h1 className="">This is the Profile Page</h1>
        <article className="" style={{ marginTop: 40 }}>
          <div className="">
            <p>{name}</p>
          </div>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
            nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
            purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{" "}
            <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
            sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
            magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
            sem.
          </div>
        </article>
      </div>
    );

}