import React from 'react';
import styles from './css/Portfolio.module.scss';
import VideoFrame from './VideoFrame.js';

const links = [
"https://www.youtube.com/embed/22cABfvpr1I",
"https://www.youtube.com/embed/9VvRpprtr3M",
"https://www.youtube.com/embed/_tm-uZxzpeg",
"https://www.youtube.com/embed/YK1CttHJvr4",
"https://www.youtube.com/embed/PpkVl3oTI-U",
"https://www.youtube.com/embed/PA5Szq2yUGk",
"https://www.youtube.com/embed/pu1NWUw2cto",
"https://www.youtube.com/embed/XoKtp8Pe63s",
"https://www.youtube.com/embed/Nh-aA3YFLag",
]



function Portfolio() {
  return ( 
  <section id='portfolio' className={styles.component}>
  <h3 className={styles.title}>Portfolio: </h3>
  <div className={styles.container}>
        {links.map((l, index )=> 
           <VideoFrame key={index} index={index} link = {l} />
      )}

  </div>
  </section>
  );
}

export default Portfolio;