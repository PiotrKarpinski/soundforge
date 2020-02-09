import Nav from '../Nav.js';
import Header from '../Header.js';
import SoundList from '../SoundList.js';
import About from '../About.js';
import Contact from '../Contact.js';
import Footer from '../Footer.js';
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


class LayoutAppearance extends React.Component {

    state = {
    inProp: false,
  }

	componentDidMount() {


	 window.addEventListener('scroll', () => {

         
         if(window.scrollY === 0){
           this.setState({inProp: true})  
         }
         
         ;
      });
  }

render(){
  return ( 
  <div>
    <TransitionGroup>
      <CSSTransition
        in={this.state.inProp}
        timeout={300}
        classNames="show"

      >

      <Nav/>
      <Header/>
      <SoundList/>
      <About/>
      <Contact/>
      <Footer/>

      </CSSTransition>     
    </TransitionGroup>
  </div>
  );
}}

export default LayoutAppearance;
