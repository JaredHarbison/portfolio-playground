import React from 'react';
import '../App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function TechStack() {
  return (
    <div className="TechStack">
      <Jumbotron className="bg-transparent">
        <Container className="tech-stack">
            <h1>Tech Stack</h1> 
            <h1 class="mt-5">
              <i class="zoom devicon-bootstrap-plain-wordmark"></i>
              <i class="devicon-css3-plain-wordmark"></i>
              <i class="devicon-django-plain-wordmark"></i>
              <i class="devicon-docker-plain-wordmark"></i>
              <i class="devicon-gimp-plain"></i>
              <i class="devicon-git-plain-wordmark"></i>
              <i class="devicon-gulp-plain"></i>
              <i class="devicon-heroku-original-wordmark"></i>
              <i class="devicon-html5-plain-wordmark"></i>
              <i class="devicon-javascript-plain"></i>
              <i class="devicon-jquery-plain-wordmark"></i>
              <i class="devicon-linux-plain"></i>
              <i class="devicon-meteor-plain-wordmark"></i>
              <i class="devicon-mocha-plain"></i>
              <i class="devicon-mongodb-plain-wordmark"></i>
              <i class="devicon-nodejs-plain-wordmark"></i>
              <i class="devicon-postgresql-plain-wordmark"></i>
              <i class="devicon-python-plain-wordmark"></i>
              <i class="devicon-ruby-plain-wordmark"></i>
              <i class="devicon-rails-plain-wordmark"></i>
              <i class="devicon-react-original"></i>
              <i class="devicon-sass-original"></i>
              <i class="devicon-slack-plain-wordmark"></i>
              <i class="devicon-trello-plain-wordmark"></i>
              <i class="devicon-visualstudio-plain"></i></h1>
        </Container>
    </Jumbotron>
    </div>
  );
}

export default TechStack;

