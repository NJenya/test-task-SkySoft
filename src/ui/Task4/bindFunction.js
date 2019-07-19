let myBind = function (contex, func, ...args) {
	return function () {
		return func.apply(contex, [...args, ...arguments])
	}
}

export default myBind