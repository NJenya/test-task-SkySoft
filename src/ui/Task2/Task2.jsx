import React from 'react'
import styles from "../Task2/Task2.module.css";

let Task2 = (props) => {

	let updateArray = (e) => {
		props.setArray(e.currentTarget.value)
	}

	let updateInterval = (e) => {
		props.setTime(e.currentTarget.value)
	}

	let pushStartInterval = () => {
		props.startInterval(props.array, props.time)
	}

	return (
		<div>
			<div className={styles.taskHeader}>
				<h2>Task 2</h2><span>solutions: functional component, routing, redux, thunk</span>
			</div>
			<div className={styles.area}>
				<div className={styles.inputArea}>
					<div>
						Enter your symbol through ','
					</div>
					<div className={styles.array}>
						<textarea onChange={updateArray} value={props.array}/>
					</div>
					<div>
						Enter interval (ms)
					</div>
					<div className={styles.interval}>
						<textarea onChange={updateInterval} value={props.interval}/>
					</div>
					<div>
						<button onClick={pushStartInterval}>Print array</button>
					</div>
				</div>
				<div className={styles.outputArea}>
					<h3 style={{color: 'red'}}>Result</h3>
					<div className={styles.printResult}>
						{props.printNumber.map(el => <div key={el.id}>{el}</div>)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Task2;