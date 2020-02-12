import React from 'react';
import styles from './css/Sound.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import Image from './Image.js';

class SoundComponent extends React.Component {
	state = {
		play: false,
	}
	audio = new Audio(this.props.url)

	componentDidMount() {

    this.audio.addEventListener('ended', () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
  }

  togglePlay = () => {
  	console.log(window.scrollY)
  	console.log('test');
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }



 render(){
  return ( 
  <div style={this.state.play ? {opacity: 1}:{ border: 'none' }} className={styles.component}>
	  <div className ={styles.img}> 
	  	<Image img={this.props.img}/>
	  </div>
	  <div className={styles.player}> 	 
	  	<h4 className={styles.name}>{this.props.title}</h4>
	  	<button className={styles.button} onClick={this.togglePlay}><FontAwesomeIcon className={styles.play} icon={this.state.play ? faPause : faPlay}/></button>
	  </div>
	  <div className={styles.info}>
	  <span>
	  	<h4>Price: {this.props.price}$</h4>
	  	<h4>License: {this.props.type}</h4>
	  	<h4>BPM: {this.props.bpm}</h4>
	  </span>
	  </div>
  </div>
  );
}}

export default SoundComponent;