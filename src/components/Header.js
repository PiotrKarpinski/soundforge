import React from 'react';
import styles from './css/Header.module.scss';

function Header() {
  return ( 
  <section id='header' className={styles.main}>
  <header>
  	<h1>Pracownia dźwięku</h1>
  	<a className={styles.link}href='https://www.facebook.com/layzee.beats/'>Znajdź mnie na Facebooku</a>
  </header>
  </section>
  );
}

export default Header;