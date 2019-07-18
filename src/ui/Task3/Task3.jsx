import React from 'react'
import MySingleton from './singletonObject'
import styles from "../Task3/Task3.module.css";
import codeImg from '../../assets/code.jpg'

class Task3 extends React.Component {

	state = {
		a: {},
		b: {},
		c: {},
		d: {}
	}

	showResult = () => {
		this.setState({
			a: MySingleton(),
			b: new MySingleton(),
			c: new MySingleton(),
			d: MySingleton()
		})
		console.log(MySingleton)
	}

// Used stack: class component, local state
	render() {
		return (
			<div>
				<div>
					<h2>Task 3</h2>
				</div>
				<div className={styles.area}>
					<div className={styles.inputArea}>
						<div>
							<img src={codeImg}/>
						</div>
						<div>
							<button onClick={this.showResult}>Show result</button>
						</div>
					</div>
					<div className={styles.outputArea}>
						<div>
							a === b result ==> {this.state.a === this.state.b && <span>true</span>}
						</div>
						<div>
							b === c result ==> {this.state.b === this.state.c && <span>true</span>}
						</div>
						<div>
							c === d result ==> {this.state.c === this.state.d && <span>true</span>}
						</div>
						<div>
							a === d result ==> {this.state.a === this.state.d && <span>true</span>}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Task3;