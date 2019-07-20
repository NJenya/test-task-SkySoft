import React from 'react'

let Table = ({data}) => {
	return (
		<table>
            <Header columns={data.columns} />
            <Body columns={data.columns} cells={data.cells}/>
		</table>
	);
}


let Header = ({columns}) => {
    return (
        <thead>
        <tr>
        { columns.map((c, index) => <HeaderCell column={c} key={index} />)}
        </tr>
        </thead>
    );
}


let Body = ({columns, cells}) => {
    let rows = [];
    let rowsCount = cells.length / columns.length;
    for (let i=0; i < rowsCount; i++) {
        rows.push([]);
        for (let j=0; j < columns.length; j++) {
            rows[i][j] = cells[ i * columns.length + j ];
        }
    }
    return (
        <tbody>
        { rows.map((r, index) => <Row columns={r} key={index}/>) }
        </tbody>
    )
}


let Row = ({columns}) => {
    return <tr>{columns.map( (c, index) => <Cell cell={c} key={index}/>)}</tr>
}


let HeaderCell = ({column}) => {

    let style = column.style;
    const onInputClick = (e) => {
        e.stopPropagation()
    }

    return (
        <th style={style} >{ column.filtering
            ? <input placeholder={column.title} onClick={onInputClick}/>
            : <span>{column.title}</span>}
        </th>
    );
}


let Cell = ({cell}) => {
    return <td>{cell.value}</td>
}

export default Table;