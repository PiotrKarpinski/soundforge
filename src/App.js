import React from 'react';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import SoundList from './components/SoundList.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './App.css';


function App() {
  return (
    <div className = 'App'>
    <Nav/>
    <Header/>
    <SoundList/>
    <About/>
    <Contact/>
    <Footer/>

    </div>
  );
}

export default App;
