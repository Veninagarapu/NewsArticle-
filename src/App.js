
import './App.css';
import Footer from './Footer';
import Section from './Section';
import Header from './Header';
import { useState } from 'react';

function App() {
  const [darkmode, setDarkMode]= useState(false);

  const toggle =()=>{
    setDarkMode(!darkmode) 

  };

  return (

   <div id='page' className={`${darkmode && 'dark'}`}>

      <Header darkmode={darkmode} />
      <button className='button' onClick={toggle}>View Mode</button>
      
      <div className='main'>
        <Section heading='news1' image='image' text='paragraph'/>
        <Section heading='news2' image='image' text='paragraph'/>
        <Section heading='news3' image='image' text='paragraphhhhhhhhhhhhhhhhh'/>
      </div>
      <Footer/> 
   </div>
  );
}

export default App;
