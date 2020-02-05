import React from 'react'
import Input from './../../components/Input/Input.jsx'
import {ContextInput} from './../../context/Input/ContextInput.jsx'

export const Inputs = React.memo(() => {

	const {dispatch, ...stateInputs} = React.useContext(ContextInput);
	const inputs = stateInputs.state.inputs
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

								/>
					})
				}
				
			</div>
		)
})