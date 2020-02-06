const ReducerInput = (state, action) => {
	switch (action.type) {
		case 'ACTIVE_INPUTS' :
		state.activeInput = action.payload.id
		return {
			...state
		}
		case 'CHANGE_INPUTS': 
		state.inputs[action.payload.id].text = action.payload.value
		return {
			...state
		}
		case 'ADD_INPUT' :
		const newInput = {
			id: state.inputs.length + 1,
			text: `Test text ${state.inputs.length + 1}`
		}
		state.inputs.push(newInput)
		return {
			...state
		}


		case 'CHAHGE_BOLD' :
		state.inputs[state.activeInput].bold = !state.inputs[state.activeInput].bold
		console.log(state)
		default: 
		return state
	}
}
export default ReducerInput;