const SET_ARRAY = 'SKYSOFTTECH/TASK2/SET_ARRAY'
const SET_INTERVAL = 'SKYSOFTTECH/TASK2/SET_INTERVAL'
const SET_PRINTNUMBER = 'SKYSOFTTECH/TASK2/SET_PRINTNUMBER'
const DELETE_PRINT_NUMBER = 'SKYSOFTTECH/TASK2/DELETE_PRINT_NUMBER'

let initialState = {
	array: [3, 2, 4],
	interval: '',
	printNumber: []
}

let task2Reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ARRAY: {
			return {
				...state, array: action.array.split(',')
			}
		}
		case SET_INTERVAL: {
			return {
				...state, interval: action.interval
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
		default: {return state}
	}
}

export const setArray = (array) => ({type: SET_ARRAY, array})
export const setInterval = (interval) => ({type: SET_INTERVAL, interval})
export const setPrintNumber = (printNumber) => ({type: SET_PRINTNUMBER, printNumber})
export const deletePrintNumber = () => ({type: DELETE_PRINT_NUMBER})



export default task2Reducer