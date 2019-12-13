import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function LogoBanner() {
  return (
    <div className="LogoBanner">
      <Jumbotron fluid className="logo-banner bg-transparent">
        <Container fluid className="">
          <h1>LOGO BANNER</h1>
          <h1>LOGO BANNER</h1>
          <h1>LOGO BANNER</h1>
          <h1>LOGO BANNER</h1>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default LogoBanner;
