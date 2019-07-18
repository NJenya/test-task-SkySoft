import React from 'react'
import styles from "../Task2/Task2.module.css";

let Task2 = (props) => {
	debugger
	let updateArray = (e) => {
		props.setArray(e.currentTarget.value)
	}

	let updateInterval = (e) => {
		props.setInterval(e.currentTarget.value)
	}

	let newArray = [...props.array]

	let startInterval = () => {
		props.deletePrintNumber()
		let time = setInterval(function () {
			if (newArray.length === 0) {
				clearInterval(time)
			} else {
				props.setPrintNumber(newArray[0])
				newArray = newArray.slice(1)
			}
		}, props.interval);
	}

	return (
		<div>
			<div>
				<h2>Task 2</h2>
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
						<button onClick={startInterval}>Print array</button>
					</div>
				</div>
				<div className={styles.outputArea}>
					<div className={styles.printResult}>
						{props.printNumber.map(el => <div>{el}</div>)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Task2;