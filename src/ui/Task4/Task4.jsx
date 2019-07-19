import React, {useState} from 'react'
import code from '../../assets/codeForTask4.jpg'
import styles from "../Task4/Task4.module.css";
import myBind from './bindFunction'

let Task4 = () => {

	let showedResult = () => {
		setShowed(true)
		let user = 'admin'
		let log = {
			error: myBind(console, console.log, '[Error]', user),
			warning: myBind(console, console.log, '[Warning]', user)
		}

		log.error('File not found')
		log.warning('No timezone set')
	}

	const [showed, setShowed] = useState(false);

	return (
		<div>
			<div className={styles.taskHeader}>
				<h2>Task 4</h2><span>solutions: functional component, routing, react hooks</span>
			</div>
			<img src={code} alt='code'/>
			<div>
				<button onClick={showedResult}>Show result in console</button>
			</div>
			{showed && <p>Open the console to see the result</p>}
		</div>
	);
}

export default Task4;