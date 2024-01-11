import React from 'react';
import aboutimg from '../images/about.png'

function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimg} alt=''/>
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam molestiae impedit voluptatum eius modi quo neque possimus exercitationem voluptatem eaque illo aliquam dolorem harum, architecto, labore quibusdam accusantium debitis repellat.</p>
        <button>READ</button>
      </div>
    </div>
  )
}

export default About;
