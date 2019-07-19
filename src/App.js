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

const data = {
	columns:
		[{
			type: 'string',
			filtering: true,
			sorting: true,
			style: {border: '1px solid black'}
		},
		{
			type: 'number',
			filtering: false,
			sorting: false,
			style: {border: '1px solid black'}
		}],
	cells:
		[{
			value: 'some string',
			style: {border: '1px solid red'}
		},
		{
			value: 'some string',
			style: {border: '1px solid red'}
		},
		{
			value: 43,
			style: {border: '1px solid green'}
		},
		{
			value: 57,
			style: {border: '1px solid green'}
		},
		]
}

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
				<Route path='/task5' render={() => <Task5 data={data}/>}/>
			</div>
		</div>
	);
}

export default App;
