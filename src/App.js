import React from 'react';
import './App.css';
import Experience from './Experience.jsx';
import LogoBanner from './LogoBanner.jsx';
import PeerReviews from './PeerReviews.jsx';
import Portfolio from './Portfolio.jsx';
import TechStack from './TechStack.jsx';
import Jumbotron from 'react-bootstrap/Jumbotron';

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
      <LogoBanner/>
      <TechStack/>
      <Portfolio/>
      <PeerReviews/>
      <Experience/>
    </div>
  );
}

export default App;
