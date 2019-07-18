import React from 'react'
import searchMaxNonrepString from './searchMaxNonrepString'
import styles from './Task1.module.css'

let Task1 = (props) => {

	let updateString = (e) => {
		props.updateString(e.currentTarget.value)
	}

	let showMaxNonrepString = () => {
		let res = searchMaxNonrepString(props.string)
		props.setResultString(res)

	}

	return (
		<div>
			<div>
				<h2>Task 1</h2>
				Enter or paste your string
			</div>
			<div className={styles.string}>
				<textarea onChange={updateString} value={props.string} placeholder='your string'/>
			</div>
			<div>
				Result
			</div>
			<div className={styles.resultString}>
				<div>Longest match of non-repetitive characters in a string:</div>
				<div style={{color: 'red'}}> {props.resultString}</div>
				<div>Length: {props.resultString.length}</div>
			</div>
			<div>
				<button onClick={showMaxNonrepString}>Show result</button>
			</div>
		</div>
	);
}

export default Task1;