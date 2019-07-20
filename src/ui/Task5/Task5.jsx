import React from 'react'
import Table from './Table'
import styles from "../Task5/Task5.module.css";

const data = {
	columns:
		[{
			title: 'CompanyName',
			type: 'string',
			filtering: true,
			sorting: true,
			style: {border: '1px solid black'}
		},
		{
			title: 'Capitalization',
			type: 'number',
			filtering: false,
			sorting: false,
			style: {border: '1px solid black'}
		}],
	cells:
		[
			{value: 'Google', style: {border: '1px solid red'}},
			{value: 43, style: {border: '1px solid green'}},
			{value: 'Microsoft', style: {border: '1px solid red'}},
			{value: 57,	style: {border: '1px solid green'}},
			{value: 'Apple', style: {border: '1px solid red'}},
			{value: 48,	style: {border: '1px solid green'}}
		]
}

let Task5 = () => {
	return <div>
		<div className={styles.taskHeader}>
			<h2>Task 2</h2><span>solutions: functional component, routing, html table</span>
		</div>
		<Table data={data}/>
	</div>
}

export default Task5;