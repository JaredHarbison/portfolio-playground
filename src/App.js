import React from 'react';
import './App.css';
import Experience from './components/Experience.jsx';
import LogoBanner from './components/LogoBanner.jsx';
import PeerReviews from './components/PeerReviews.jsx';
import Portfolio from './components/Portfolio.jsx';
import TechStack from './components/TechStack.jsx';
import Jumbotron from 'react-bootstrap/Jumbotron';
// scroll="data-spy"
function App() {

  document.body.classList.add('js-loading');

  window.addEventListener("load", showPage, false);

  function showPage() {
    document.body.classList.remove('js-loading');
  }
  return (
    <div className="App" >
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link 
        rel="stylesheet" 
        href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
      </link>
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
