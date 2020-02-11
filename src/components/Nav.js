import React from 'react';
import style from './css/Nav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, animateScroll as scroll } from "react-scroll";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return ( 
	<nav className={style.nav}>

		<ul>


	 	
	 		<li><Link 
				activeClass="active"
			    to="portfolio"
			    spy={true}
			    smooth='easeOutCirc'
			    offset={-70}
			    duration= {700}
			    ><FontAwesomeIcon icon={faMedal}/></Link></li>

			<li><a rel="noopener noreferrer" target='_blank' href='https://www.youtube.com/watch?v=_tm-uZxzpeg'><FontAwesomeIcon icon={faYoutube}/></a></li>

					<li><Link 
			activeClass="logo"
		    to="header"
		    spy={true}
		    smooth={true}
		    offset={-70}
			duration= {400}
		    style={{fontSize: 30+'px'}}
		    ><FontAwesomeIcon icon={faHome}/></Link></li>

			<li><a rel="noopener noreferrer" target='_blank' href='https://soundcloud.com/layzeone'><FontAwesomeIcon icon={faSoundcloud}/></a></li>

	 		<li><Link 
				activeClass="active"
			    to="contact"
			    spy={true}
			    smooth={true}
			    offset={-70}
			    duration= {400}
			    ><FontAwesomeIcon icon={faEnvelope}/></Link></li>

	 	</ul>
	</nav>
  );
}

export default Nav;