import React from 'react';
import Navbar from "./ui/Navbar/Navbar";
import {Route} from "react-router-dom";
import Task3 from "./ui/Task3/Task3";
import Task4 from "./ui/Task4/Task4";
import Task5 from "./ui/Task5/Task5";
import styles from './App.module.css'
import Header from "./ui/Header/Header";
import Task1Container from "./ui/Task1/Task1Container";
import Task2Container from "./ui/Task2/Task2Container";


function App() {
	return (
		<div className={styles.appWrapper}>
			<div className={styles.header}>
				<Header/>
			</div>
			<div className={styles.navbar}>
				<Navbar />
			</div>
			<div className={styles.content}>
				<Route path='/task1' render={() => <Task1Container />}/>
				<Route path='/task2' render={() => <Task2Container />}/>
				<Route path='/task3' render={() => <Task3/>}/>
				<Route path='/task4' render={() => <Task4/>}/>
				<Route path='/task5' render={() => <Task5/>}/>
			</div>
		</div>
	);
}

export default App;
