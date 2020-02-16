import React from 'react';
import styles from './css/Header.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import Portfolio from '../images/portfolio.jpg';
import Samples from '../images/samples.jpg';
import Beats from '../images/beats.jpg';


function Header() {
  return ( 
  <section id='header' className={styles.main}>
  <header>
  	<h1>Layzee Beats</h1>
  	<div className={styles.container}>
  		<div style={{ backgroundImage: `url(${Beats})`}}>
  			<Link 
				activeClass="active"
			    to="beats"
			    spy={true}
			    smooth='easeOutCirc'
			    offset={-70}
			    duration= {700}
			    ><h4>Go to my beats library!</h4></Link>
  		</div>
  		<div style={{ backgroundImage: `url(${Samples})`}}>
  			<a rel="noopener noreferrer" target='_blank' href='http://layzeebeats.vot.pl/static/media/sound/Layzee Sound Pack vol.1.rar'><h4>Download FREE Samples!</h4></a>
  		</div>
  		<div style={{ backgroundImage: `url(${Portfolio})`}}>
  			<Link

				activeClass="active"
			    to="portfolio"
			    spy={true}
			    smooth='easeOutCirc'
			    offset={-70}
			    duration= {700}
			    ><h4>Check out my work!</h4></Link>
  		</div>

  	</div>
  </header>
  </section>
  );
}

export default Header;