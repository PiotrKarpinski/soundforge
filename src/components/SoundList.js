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

const sounds = [
{id: 0, url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', title: 'Udźwiękowienie gry'},
{id: 1, url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', title: 'Dubbing, Lektor'},
{id: 2, url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', title: 'Sound design'},
{id: 3, url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', title: 'Muzyka do intro'},
{id: 4, url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', title: 'Podkład na zamówienie'},
{id: 5, url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', title: 'Jingiel radiowy'}

]  
  return ( 
  <section>
    <TransitionGroup className= {styles.list}> {
      sounds.map(({id, url, title }) => (
      <CSSTransition
        key={id}
        in={this.state.inProp}
        timeout={400}
        classNames="display"
        mountOnEnter
        unmountOnExit
        appear={false}

      >

        <SoundComponent url={url} title={title}/>

      </CSSTransition> 

      ))}
    
    </TransitionGroup>
  </section>
  );
}}


export default SoundList;