import React from 'react'
import {NavLink} from 'react-router-dom'
import {ContextInput} from './../../context/Input/ContextInput.jsx'
import stateInput from './../../context/Input/StateInput.jsx'
import ReducerInput from './../../context/Input/ReducerInput.jsx'


export default React.memo(() => {

	const [state, dispatch] = React.useReducer(stateInput, ReducerInput)


	return (
			<ContextInput.Provider value={{}}>
				<div>Constrcutor</div>
				<NavLink to="/calculator">Finished</NavLink>
			</ContextInput.Provider>
		)
})