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
		return {
			...state
		}
		case 'CHAHGE_STYLE' :
		state.inputs[state.activeInput].style = !state.inputs[state.activeInput].style
		return {
			...state
		}
		case 'CHAHGE_UNDERLINE' :
		state.inputs[state.activeInput].underline = !state.inputs[state.activeInput].underline
		return {
			...state
		}
		case 'CHAHGE_FONTSIZE' :
		state.inputs[state.activeInput].fontSize = action.payload
		return {
			...state
		}
		case 'CHAHGE_COLOR' :
		state.inputs[state.activeInput].color = action.payload.hex
		return {
			...state
		}
		default: 
		return state
	}
}
export default ReducerInput;