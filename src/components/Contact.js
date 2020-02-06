import React from 'react';
import styles from './css/Component.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return ( 
  <section className={styles.component}>
  <h3>Kontakt</h3>
  	<form>
  		<div>
  		<h5>Imie i nazwisko:</h5>
  		<input className={styles.input} type='text'/>
  		<h5>Nazwa zlecenia:</h5>
  		<input className={styles.input} type='text'/>
  		</div>
  		<div className={styles.input}>
  		<input type="checkbox"/>
  		<p>Moje oczekiwania finansowe, biorąc pod uwagę średnie zarobki to 3300 netto. Jestem skłonny do negocjacji.</p>
  		</div>
  		<button className={styles.submit} type='submit'>Wyślij</button>	
  	</form>
  </section>
  );
}

export default Contact;