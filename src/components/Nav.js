import React from 'react';
import style from './css/Nav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, animateScroll as scroll } from "react-scroll";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';

function Nav() {
  return ( 
  <div>
	<nav className={style.nav}>

		<Link 
			activeClass="logo"
		    to="header"
		    spy={true}
		    smooth={true}
		    offset={-70}
			duration= {400}
		    className={style.logo}
		    >Logo</Link>
	 	<ul>
	 		<li><Link 
				activeClass="active"
			    to="about"
			    spy={true}
			    smooth='easeOutCirc'
			    offset={-70}
			    duration= {700}
			    >O mnie</Link></li>

			<li><a rel="noopener noreferrer" target='_blank' href='https://www.youtube.com/watch?v=_tm-uZxzpeg'>Youtube <FontAwesomeIcon icon={faYoutube}/></a></li>
			<li><a rel="noopener noreferrer" target='_blank' href='https://soundcloud.com/layzeone'>Soundcloud <FontAwesomeIcon icon={faSoundcloud}/></a></li>

	 		<li><Link 
				activeClass="active"
			    to="contact"
			    spy={true}
			    smooth={true}
			    offset={-70}
			    duration= {400}
			    >Kontakt</Link></li>

	 	</ul>
	</nav>
  </div>
  );
}

export default Nav;