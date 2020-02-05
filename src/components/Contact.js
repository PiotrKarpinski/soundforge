import React from 'react';
import styles from './css/Component.module.scss';


function Contact() {
  return ( 
  <section className={styles.component}>
  <h3>Kontakt</h3>
  	<form>
  		<input type='text'/>
  		<input type='text'/>
  		
  		<input type="checkbox"/>  		
  		<input type="checkbox"/>
  	</form>
  </section>
  );
}

export default Contact;