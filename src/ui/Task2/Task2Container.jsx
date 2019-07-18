import Task2 from "./Task2";
import {connect} from "react-redux";
import {setArray, setTime, setPrintNumber, startInterval} from "../../redux/task2Reducer";

let mapStateToProps = (state) => {
	return ({
		array: state.task2Page.array,
		time: state.task2Page.time,
		printNumber: state.task2Page.printNumber
	})
}

let Task2Container = connect(mapStateToProps, {setArray, setTime, setPrintNumber, startInterval} )(Task2)

export default Task2Container