import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
      <Jumbotron fluid className="background-rom-and-moon"></Jumbotron>
      <Jumbotron fluid className="background-rom-cutout bg-transparent"></Jumbotron>
      <Jumbotron fluid className="rom-cutout-upside bg-transparent"></Jumbotron>
      <Jumbotron fluid className="test bg-transparent"></Jumbotron>
      <Jumbotron fluid className="logo-banner bg-transparent">
        <Container fluid className="">
          <h1>LOGO BANNER</h1>
          <h1>LOGO BANNER</h1>
          <h1>LOGO BANNER</h1>
          <h1>LOGO BANNER</h1>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="tech-stack bg-transparent">
        <Container fluid className="">
          <h1>TECH STACK</h1>
          <h1>TECH STACK</h1>
          <h1>TECH STACK</h1>
          <h1>TECH STACK</h1>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="portfolio bg-transparent">
        <Container fluid className="">
          <h1>PORTFOLIO</h1>
          <h1>PORTFOLIO</h1>
          <h1>PORTFOLIO</h1>
          <h1>PORTFOLIO</h1>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="bg-transparent">
        <Container fluid className="peer-reviews">
          <h1>PEER REVIEWS</h1>
          <h1>PEER REVIEWS</h1>
          <h1>PEER REVIEWS</h1>
          <h1>PEER REVIEWS</h1>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="bg-transparent">
        <Container fluid className="experience">
          <h1>EXPERIENCE</h1>
          <h1>EXPERIENCE</h1>
          <h1>EXPERIENCE</h1>
          <h1>EXPERIENCE</h1>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
