import React from 'react';
import styles from './css/Sound.module.scss'

function SoundComponent(props) {
  return ( 
  <div className={styles.component}>
  	<h3>{props.title}</h3>
  </div>
  );
}

export default SoundComponent;