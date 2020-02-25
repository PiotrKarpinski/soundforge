import React from 'react';
import styles from './css/Portfolio.module.scss';


function VideoFrame(props) {
  return ( 
  <div className={styles.box}>
  <iframe width="560" height="315" src={props.link} title={props.index} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>  

  );
}

export default VideoFrame;