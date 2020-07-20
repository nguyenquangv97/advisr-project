import React from 'react';

const TableItem = (props) => {
	const dataOutput = props.dataName.map((eachDataName) => {
		return <td key={eachDataName}>{props.dataValues[eachDataName]}</td>;
	});
	return <tr>{dataOutput}</tr>;
};

export default TableItem;
