import React from 'react';
import styles from './css/Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return ( 
  
	<footer className={styles.footer}>
	 	<ul>
	 		<li><a href='https://www.facebook.com/layzee.beats/'><FontAwesomeIcon className={styles.logo} icon={faFacebook}/></a></li>

	 		<li><a href='https://soundcloud.com/layzeone'><FontAwesomeIcon className={styles.logo} icon={faSoundcloud}/></a></li>

	 		<li><a href='https://www.linkedin.com/in/pgmkarpinski/'><FontAwesomeIcon className={styles.logo} icon={faLinkedin}/></a></li>

	 	</ul>
	</footer>
  
  );
}

export default Footer;