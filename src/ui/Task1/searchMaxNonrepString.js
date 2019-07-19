let searchMaxNonrepString = (string) => {
	let result = ''
	let strArray = []
	let str = ''
	for (let i = 0; i < string.length; i++) {
		if (str.indexOf(string[i]) >= 0){
			strArray.push(str)
			str = string[i]
		} else {
			str += string[i]
		}
	}
	if (strArray.length) {
		for (let i = 0; i < strArray.length; i++) {
			if (result.length < strArray[i].length) {
				result = strArray[i]
			}
		}
	} else {
		result = string
	}
	return result;
}

export default searchMaxNonrepString