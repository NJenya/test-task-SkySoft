import React from 'react'
import Table from './Table'

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
		<Table data={data}/>
	</div>
}

export default Task5;