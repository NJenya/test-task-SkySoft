let MySingleton = (function () {
	let instance = null;

	function Construct_singletone () {
		if (instance) {
			return instance;
		}
		//if вызвали меня с new
		if (this && this.constructor === Construct_singletone) {
			instance = this;
		} else {
			return new Construct_singletone();
		}

		//return this;
	}

	return Construct_singletone;
}());

export default MySingleton;

//new MySingleton();
//MySingleton();


// function Man() {
// 	// this = {};
// 	this.name = "Женя";
// 	//return this;
// }
// var a = new Man();
// var b = Man();
