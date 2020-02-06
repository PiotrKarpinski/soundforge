import React from 'react';
import styles from './css/Sound.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-brands-svg-icons';
import { faStop } from '@fortawesome/free-brands-svg-icons';

function SoundComponent(props) {
  return ( 
  <div className={styles.component}>
  	<h3>{props.title}</h3>
  </div>
  );
}

export default SoundComponent;