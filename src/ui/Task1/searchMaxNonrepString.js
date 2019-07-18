let searchMaxNonrepString = (string) => {
	let result = ''
	let str = []
	let strfor = ''
	for (let i = 0; i < string.length; i++) {
		if (strfor.indexOf(string[i]) >= 0){
			str.push(strfor)
			strfor = string[i]
		} else {
			strfor += string[i]
		}
	}
	for (let i = 0; i < str.length; i++) {
		if (result.length < str[i].length) {
			result = str[i]
		}
	}
	return result;
}

export default searchMaxNonrepString