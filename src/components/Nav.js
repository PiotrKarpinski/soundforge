import React from 'react';
import style from './css/Nav.module.scss';

function Nav() {
  return ( 
  <div>
	<nav className={style.nav}>
		<a className={style.logo} href='#'>Logo</a>
	 	<ul>
	 		<li><a href='#'>O mnie</a></li>
	 		<li><a href='#'>Kontakt</a></li>

	 	</ul>
	</nav>
  </div>
  );
}

export default Nav;