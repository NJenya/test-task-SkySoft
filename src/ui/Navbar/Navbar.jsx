import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

let Navbar = () => {
	return <nav className={styles.nav}>
		<div>
			<NavLink to='/task1'>Task 1</NavLink>
		</div>
		<div>
			<NavLink to='/task2'>Task 2</NavLink>
		</div>
		<div>
			<NavLink to='/task3'>Task 3</NavLink>
		</div>
		<div>
			<NavLink to='/task4'>Task 4</NavLink>
		</div>
		<div>
			<NavLink to='/task5'>Task 5</NavLink>
		</div>
	</nav>
}

export default Navbar;