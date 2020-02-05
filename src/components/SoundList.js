import React from 'react';
import SoundComponent from './SoundComponent.js';
import styles from './css/Sound.module.scss'


function SoundList() {
  return ( 
  <section className={styles.list}>
  	<SoundComponent title='Jingiel radiowy'/>
    <SoundComponent title='Udźwiękowienie gry'/>
	<SoundComponent title='Dubbing, Lektor'/>
	<SoundComponent title='Sound design'/>
	<SoundComponent title='Muzyka do intro'/>	
	<SoundComponent title='Podkład na zamówienie'/>

  </section>
  );
}

export default SoundList;