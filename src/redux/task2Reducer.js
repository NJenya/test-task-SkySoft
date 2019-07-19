const SET_ARRAY = 'SKYSOFTTECH/TASK2/SET_ARRAY'
const SET_TIME = 'SKYSOFTTECH/TASK2/SET_TIME'
const SET_PRINTNUMBER = 'SKYSOFTTECH/TASK2/SET_PRINTNUMBER'
const DELETE_PRINT_NUMBER = 'SKYSOFTTECH/TASK2/DELETE_PRINT_NUMBER'

let initialState = {
	array: [3, 2, 4],
	time: null,
	printNumber: []
}

let task2Reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ARRAY: {
			return {
				...state, array: action.array.split(',')
			}
		}
		case SET_TIME: {
			return {
				...state, time: action.time
			}
		}
		case SET_PRINTNUMBER: {
			return {
				...state, printNumber: [...state.printNumber, action.printNumber]
			}
		}
		case DELETE_PRINT_NUMBER: {
			return {
				...state, printNumber: []
			}
		}
		default: {
			return state
		}
	}
}

export const setArray = (array) => ({type: SET_ARRAY, array})
export const setTime = (time) => ({type: SET_TIME, time})
export const setPrintNumber = (printNumber) => ({type: SET_PRINTNUMBER, printNumber})
export const deletePrintNumber = () => ({type: DELETE_PRINT_NUMBER})

let time = null

export const startInterval = (array, interval) => (dispatch) => {
	clearInterval(time)
	let newArray = [...array]
	dispatch(deletePrintNumber())
	time = setInterval(function () {
		if (newArray.length === 0) {
			clearInterval(time)
		} else {
			dispatch(setPrintNumber(newArray[0]))
			newArray = newArray.slice(1)
		}
	}, interval);
}


export default task2Reducer