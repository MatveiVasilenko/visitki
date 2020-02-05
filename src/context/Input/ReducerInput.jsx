const ReducerInput = (state, action) => {
	switch (action.type) {
		case 'CHANGE_INPUTS': 
		state.inputs[action.payload.id].text = action.payload.value
		return {
			...state
		}
		default: 
		return state
	}
}
export default ReducerInput;