import React from 'react';

function Section({heading, image, text}) {
  return (
    <div className='section'>
        <h1>{heading}</h1>
        <img src={image} alt='news'/>
        <p>{text}</p>
    </div>
  )
}

export default Section;