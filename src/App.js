import React from 'react';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import SoundList from './components/SoundList.js';
import Portfolio from './components/Portfolio.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import './App.css';
import { connect } from 'react-redux';
import './components/css/settings.scss';


const lease = [];
const exclusive = [];
const sold = [];
const latest = [];





class App extends React.Component {
  render() {

console.log(this.props.beats)
for (let beat of this.props.beats) {
  if (beat.sold) {
    sold.push(beat)    

  } 
  if (beat.type === 'Lease') {
    beat.sold = false;
    lease.push(beat)
  }
  if (beat.type === 'Exclusive' && beat.sold === false) {

    exclusive.push(beat)
  }

  if (beat.id > this.props.beats.length-4) {
    latest.push(beat)
  } 
}

    latest.reverse()





  
  return (
    <div className = 'App'>
    <Nav/>
    <Header/>
    <div className='beats'>
    <h2>Beats Library</h2>
    <div id='beats' className='container'>
    <SoundList  list="Latest" beats={latest}/>
    <SoundList  list="Recently sold" beats={sold}/>
    <SoundList  list="Exclusive" beats={exclusive}/>
    <SoundList  list="Lease" beats={lease}/>
    </div>
    </div>
    <Portfolio/>
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

