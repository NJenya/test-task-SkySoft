import Task1 from "./Task1";
import {connect} from "react-redux";
import {setResultString, updateString} from "../../redux/task1Reducer";

let mapStateToProps = (state) => {
	return ({
		string: state.task1Page.string,
		resultString: state.task1Page.resultString
	})
}

let Task1Container = connect(mapStateToProps, {updateString, setResultString} )(Task1)

export default Task1Container