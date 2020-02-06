import React from 'react'
import {ContextInput} from './../../context/Input/ContextInput.jsx'


export const Tools = React.memo(() => {

	const {dispatch, ...stateInputs} = React.useContext(ContextInput);
	const inputs = stateInputs.state.inputs

	const changeBold = () => {
		dispatch({
			type: 'CHAHGE_BOLD'
		})
	}
	const changeStyle = () => {
		dispatch({
			type: 'CHAHGE_STYLE'
		})
	}
	const changeUnderline = () => {
		dispatch({
			type: 'CHAHGE_UNDERLINE'
		})
	}

	return (
			<div style={{height: '5%'}}>
				<button onClick={changeBold}>B</button>
				<button onClick={changeStyle}>I</button>
				<button onClick={changeUnderline}>U</button>
			</div>
		)
})