import React from 'react';
import '../App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


function ComingSoon() {
    let spans = document.querySelectorAll('.word span');
    spans.forEach((span, idx) => {
      span.addEventListener('click', (e) => {
        e.target.classList.add('active');
      });
      span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
      });
      
      // Initial animation
      setTimeout(() => {
        span.classList.add('active');
      }, 750 * (idx+1))
    });
    
  return (
    <div className="ComingSoon">
      <Jumbotron className="bg-transparent">
        <Container className="word">
            <div class="row">

                    <div class="word">
                    <span>M</span>
                    <span>O</span>
                    <span>R</span>
                    <span>E</span>
                    </div>
                    <div class="word">
                    <span>C</span>
                    <span>O</span>
                    <span>M</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    </div>
                    <div class="word">
                    <span>S</span>
                    <span>O</span>
                    <span>O</span>
                    <span>N</span>
                    </div>

            </div>
        </Container>
    </Jumbotron>
    </div>
  );
}

export default ComingSoon;

