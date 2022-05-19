function sortedSquaredArray(array) {
	let newArray = array.map(function(m) {
		return Math.pow(m,2);
	});
	newArray.sort(function(a,b) {
		return a-b;
	});
	return newArray;
}
	
	
exports.sortedSquaredArray = sortedSquaredArray;
