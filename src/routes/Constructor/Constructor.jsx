import React from 'react'
import {NavLink} from 'react-router-dom'
import {ContextInput} from './../../context/Input/ContextInput.jsx'
import stateInput from './../../context/Input/StateInput.jsx'
import ReducerInput from './../../context/Input/ReducerInput.jsx'
import {Inputs} from './../../modules/Inputs/Inputs.jsx'
import {Tools} from './../../modules/Tools/Tools.jsx'
import {Field} from './../../modules/Field/Field.jsx'


export default React.memo(() => {

	const [state, dispatch] = React.useReducer(ReducerInput, stateInput)


	return (
			<ContextInput.Provider value={{state, dispatch}}>
				<div style={{display: 'flex', height: '600px'}}>
					<div style={{width: '30%', backgroundColor: '#ccc'}}>
						<Inputs />
					</div>
					<div style={{width: '70%', backgroundColor: '#eee'}}>
						<Tools />
						<Field />
					</div>

				</div>
				<NavLink to="/calculator">Finished</NavLink>
			</ContextInput.Provider>
		)
})