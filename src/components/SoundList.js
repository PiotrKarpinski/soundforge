import React from 'react';
import SoundComponent from './SoundComponent.js';
import styles from './css/Sound.module.scss'


class SoundList extends React.Component {



render(){


  if (this.props.beats.length > 0) {
  return ( 
  <section className={styles.list}>
  <h3>{this.props.list}</h3>
    <div> {
      this.props.beats.map(({id, url,img, title, BPM, price, type, sold }) => (

        <SoundComponent key={id} img={img} url={url} title={title}  price={price} type={type} sold={sold}/>

      ))}
    
    </div>
  </section>

  )}
  else {return(null)

  };
}}

export default SoundList;


