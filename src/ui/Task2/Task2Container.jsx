import Task2 from "./Task2";
import {connect} from "react-redux";
import {setArray, setInterval, setPrintNumber, deletePrintNumber} from "../../redux/task2Reducer";

let mapStateToProps = (state) => {
	return ({
		array: state.task2Page.array,
		interval: state.task2Page.interval,
		printNumber: state.task2Page.printNumber
	})
}

let Task2Container = connect(mapStateToProps, {setArray, setInterval, setPrintNumber, deletePrintNumber} )(Task2)

export default Task2Container