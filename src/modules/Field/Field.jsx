import React from 'react'
import {ContextInput} from './../../context/Input/ContextInput.jsx'


export const Field = React.memo(() => {
	const {...stateInputs} = React.useContext(ContextInput);
	const inputs = stateInputs.state.inputs

	return (
			<div style={{backgroundColor: 'blue', color: '#fff', height: '95%'}} >
				{
					inputs.map((input, index) => {
						return <div key={index}>{input.text}</div>
					})
				}
			</div>
		)
})