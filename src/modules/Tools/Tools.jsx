import React from 'react'
import {ContextInput} from './../../context/Input/ContextInput.jsx'
import { SketchPicker } from 'react-color'


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
	const changeFontSize = (e) => {
		e.preventDefault()
		dispatch({
			type: 'CHAHGE_FONTSIZE',
			payload: e.target.value
		})
	}
	const changeColor = (color) => {
		dispatch({
			type: 'CHAHGE_COLOR',
			payload: color
		})
	}

	return (
			<div style={{height: '5%'}}>
				<button onClick={changeBold}>B</button>
				<button onClick={changeStyle}>I</button>
				<button onClick={changeUnderline}>U</button>
				<select onChange={changeFontSize}>
					<option value="14">14</option>
					<option value="16">16</option>
					<option value="18">18</option>
				</select>
				<div style={{display: 'flex',  justifyContent: 'flex-end'}}>
					<SketchPicker 
						color={inputs[stateInputs.state.activeInput].color}
						onChange={changeColor}
					/>
				</div>
			</div>
		)
})