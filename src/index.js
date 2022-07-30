
// You should implement your task here.

module.exports = function towelSort(matrix) {
	if (matrix === undefined || matrix.length === 0) {
		return [];
	}

	let resultArray = [];

	for (let index = 0; index < matrix.length; index++) {
		if (index % 2 === 0) {
			matrix[index].forEach(element => {
				resultArray.push(element);
			});
		} else {
			matrix[index].reverse().forEach(element => {
				resultArray.push(element);
			});
		}
	}
	return resultArray;
}
