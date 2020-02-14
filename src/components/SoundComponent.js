import React from 'react';
import styles from './css/Sound.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import Image from './Image.js';
import { connect } from 'react-redux'
import { createAction_play } from '../redux/playReducer'


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

  handlePlay = () => {

  		console.log(this.props.playing)
  		console.log(this.props.url)
    	console.log(this.audio.src)
	  	this.props.play(this.audio.src)

  	if (this.props.playing === undefined) {
  		console.log('pierwsze')
  		this.audio.play()
  	} else if (this.props.playing !== this.audio.src) {
  		console.log('zmiana') 		
  		this.audio.play()
  	} else if (this.props.playing === this.audio.src) {
  		this.audio.pause()
  	}

  }

  togglePlay = () => {

    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.handlePlay() : this.audio.pause();
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
		  	<h4>{this.props.bpm}</h4>
		  	<h4 style={this.props.price === 0 ? {display: 'block'}:{ display:'none' }}>FREE</h4>
		  	<h4 style={this.props.sold ? {display: 'block'}:{ display:'none' }}>SOLD ({this.props.type})</h4>
		  	<h4 style={this.props.sold ? {display: 'none'}:{ display:'block' }}>AVAILABLE</h4>
	  	
		  </span>
		  </div>
  </div>
  );
}}


const mapDispatchToProps = (dispatch,url) => ({
    play: url => dispatch(createAction_play({
        url
    })),
})

const mapStateToProps = (state)=>{
return {
    playing: state.play.url
     }
}


export default connect(mapStateToProps,mapDispatchToProps)(SoundComponent);
