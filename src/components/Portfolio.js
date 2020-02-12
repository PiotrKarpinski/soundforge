import React from 'react';
import styles from './css/Portfolio.module.scss';


function Portfolio() {
  return ( 
  <section id='portfolio' className={styles.component}>
  <h3 className={styles.title}>Portfolio: </h3>
  <div className={styles.container}>
  <div className={styles.box}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/22cABfvpr1I" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>  
  <div className={styles.box}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/9VvRpprtr3M" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
  <div className={styles.box}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/_tm-uZxzpeg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
  <div className={styles.box}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/YK1CttHJvr4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
  <div className={styles.box}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/PpkVl3oTI-U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
  <div className={styles.box}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/PA5Szq2yUGk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
  <div className={styles.box}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/pu1NWUw2cto" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
  <div className={styles.box}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/XoKtp8Pe63s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
  <div className={styles.box}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Nh-aA3YFLag" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>

  </div>
  </section>
  );
}

export default Portfolio;