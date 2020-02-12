import React from 'react';
import styles from './css/Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Contact() {
  return ( 
  <section id='contact' className={styles.component}>
  <h3>Contact</h3>
      <FontAwesomeIcon  className={styles.env} icon={faEnvelope}/>
  		<h5>If you are interested in purchasing one of my beats, send your offer via email to: 
        <span> lzfprod1@gmail.com</span>
        <br/>Or send me a message via my <a rel="noopener noreferrer" target='_blank' href='https://www.facebook.com/layzee.beats/'>Facebook page</a>
      </h5>


  </section>
  );
}

export default Contact;