import React from 'react';
import SoundComponent from './SoundComponent.js';
import styles from './css/Sound.module.scss'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class SoundList extends React.Component {



    state = {
    inProp: false,
  }

  componentDidMount() {


   window.addEventListener('scroll', () => {

         
         if(window.scrollY > 200){
           this.setState({inProp: true})

         }
         else {
           this.setState({inProp: false})
   
         }
         console.log(this.state.inProp)
         ;
      });
  }



render(){



  return ( 
  <section>
  <h3>{this.props.list}</h3>
    <TransitionGroup style={{backgroundColor: this.props.color}} className={styles.list}> {
      this.props.beats.map(({id, url, title, BPM, price, type, sold }) => (
      <CSSTransition
        in={this.state.inProp}
        key={id}
        timeout={400}
        classNames="display"
        
        unmountOnExit
        appear={false}

      >

        <SoundComponent url={url} title={title} bpm={BPM} price={price} type={type} sold={sold}/>

      </CSSTransition> 

      ))}
    
    </TransitionGroup>
  </section>
  );
}}

export default SoundList;


