import React from 'react';
import styles from './css/Portfolio.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


function Portfolio() {
  return ( 
  <section id='portfolio' className={styles.component}>
  <h3>Layzee Sample Pack give away!</h3>
  <div className={styles.row}>
  <div className={styles.description}>
  	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at porta enim. Etiam sollicitudin tristique turpis,
  	 id aliquam ex efficitur non. Morbi accumsan malesuada lacus. Nulla pulvinar tellus quis ex tincidunt,
  	  at dapibus justo auctor. Curabitur commodo nunc sit amet vulputate pharetra.
  	   Pellentesque vitae consectetur purus. Integer nibh urna, consequat non nulla vitae, molestie tempus orci.
  	    Aenean blandit leo vitae nisi semper vehicula. Integer ullamcorper leo ut dictum vehicula.</p>
  </div>
  <a className={styles.download}><FontAwesomeIcon icon={ faDownload} />Click here to download my samples pack!</a>
  	</div>
  </section>
  );
}

export default Portfolio;