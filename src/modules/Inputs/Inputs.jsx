import React from 'react'
import Input from './../../components/Input/Input.jsx'
import {ContextInput} from './../../context/Input/ContextInput.jsx'

export const Inputs = React.memo(() => {

	const {dispatch, ...stateInputs} = React.useContext(ContextInput);
	const inputs = stateInputs.state.inputs

	const addInputText = () => {
		dispatch({
			type: 'ADD_INPUT'

		})
	}
	return (
			<div>
				{
					inputs.map((input, index) => {
						return <Input 
								name="test1" 
								value={input.text} 
								key={index}
								onChange={(e) => {
									dispatch({
										type: 'CHANGE_INPUTS',
										payload: {
											id: index,
											value: e.target.value
										}
									})
								}}
								onClick={() => {
									dispatch({
										type: 'ACTIVE_INPUTS',
										payload: {
											id: index,											
										}
									})
								}}

								/>
					})
				}
				<button onClick={addInputText}>Create text</button>
			</div>
		)
})