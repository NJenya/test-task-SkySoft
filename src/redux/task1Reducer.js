const UPDATE_STRING = 'SKYSOFTTECH/TASK1/UPDATE_STRING'
const SET_RESULTSTRING = 'SKYSOFTTECH/TASK1/SET_RESULTSTRING'

let initialState = {
	string: '',
	resultString: ''
}

let task1Reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_STRING: {
			return {
				...state, string: action.string
			}
		}
		case SET_RESULTSTRING: {
			return {
				...state, resultString: action.resultString
			}
		}
		default: {return state}
	}
}

export const updateString = (string) => ({type: UPDATE_STRING, string})
export const setResultString = (resultString) => ({type: SET_RESULTSTRING, resultString})

export default task1Reducer