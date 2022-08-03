import React from 'react';

function Header( {darkmode}) {
   const style ={
    backgroundColor :darkmode ? 'black': 'white'
   };
  return (
    <div className='header' style={style}>
        <nav className='nav'>
            <ul className='ul'>
             <li><a href='#'>Home</a></li>
             <li><a href='#'>Recent</a></li>
             <li><a href='#'>Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header;