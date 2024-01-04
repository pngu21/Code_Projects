import React from 'react';


function Featurebox(props) {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt=''/>
      </div>
      <div className='a-b-text'>
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cupiditate earum odio obcaecati quidem non doloremque dicta nam temporibus, vel sequi vero iste veniam cumque eos. Pariatur vero debitis et.</p>
      </div>
    </div>
  )
}

export default Featurebox;
