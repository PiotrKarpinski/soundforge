import React from 'react';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import SoundList from './components/SoundList.js';
import Samples from './components/Samples.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './App.css';
import { connect } from 'react-redux';

const lease = [];
const exclusive = [];
const sold = [];
const latest = [];





class App extends React.Component {
  render() {

console.log(this.props.beats)
for (let beat of this.props.beats) {
  if (beat.type === 'Lease')
    lease.push(beat)
  if (beat.type === 'Exclusive')
    exclusive.push(beat)
  if (beat.sold)
    sold.push(beat)  
}

  
  return (
    <div className = 'App'>
    <Nav/>
    <Header/>
    <div className='container'>
    <SoundList color='black' list="Latest" beats={lease}/>
    <SoundList color='blue' list="Sold" beats={sold}/>
    <SoundList color='grey' list="Exclusive" beats={exclusive}/>
    <SoundList color='yellow' list="Lease" beats={lease}/>
    </div>
    <Samples/>
    <Contact/>
    <Footer/>

    </div>
  );
}}

const mapStateToProps = (state)=>{
return {
    beats: state.beats
     }
}

export default connect(mapStateToProps)(App);

