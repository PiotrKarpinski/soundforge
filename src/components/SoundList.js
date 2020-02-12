import React from 'react';
import SoundComponent from './SoundComponent.js';
import styles from './css/Sound.module.scss'


class SoundList extends React.Component {



render(){



  return ( 
  <section className={styles.list}>
  <h3>{this.props.list}</h3>
    <div style={{backgroundColor: this.props.color}}> {
      this.props.beats.map(({id, url,img, title, BPM, price, type, sold }) => (

        <SoundComponent key={id} img={img} url={url} title={title} bpm={BPM} price={price} type={type} sold={sold}/>

      ))}
    
    </div>
  </section>
  );
}}

export default SoundList;


