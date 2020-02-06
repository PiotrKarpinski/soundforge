import React from 'react';
import styles from './css/Component.module.scss';

function About() {
  return ( 
  <section className={styles.component}>
  <h3>O mnie</h3>
  <div className={styles.row}>
  <div className={styles.description}>
  	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at porta enim. Etiam sollicitudin tristique turpis,
  	 id aliquam ex efficitur non. Morbi accumsan malesuada lacus. Nulla pulvinar tellus quis ex tincidunt,
  	  at dapibus justo auctor. Curabitur commodo nunc sit amet vulputate pharetra.
  	   Pellentesque vitae consectetur purus. Integer nibh urna, consequat non nulla vitae, molestie tempus orci.
  	    Aenean blandit leo vitae nisi semper vehicula. Integer ullamcorper leo ut dictum vehicula.</p>
  </div>
  <div className={styles.photo}>
  </div>
  	</div>
  </section>
  );
}

export default About;