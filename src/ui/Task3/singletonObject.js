let MySingleton = (function () {
	let instance = null;

	function Construct_singletone () {
		if (instance) {
			return instance;
		}
		if (this && this.constructor === Construct_singletone) {
			instance = this;
		} else {
			return new Construct_singletone();
		}
	}
	return Construct_singletone;
}());

export default MySingleton;

