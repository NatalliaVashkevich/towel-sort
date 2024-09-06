
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArray = [];
  if (matrix === undefined) {
    return newArray;
  }  else if (matrix.length === 4) {
    newArray = newArray.concat(matrix[0]);
  newArray = newArray.concat(matrix[1].reverse());
    newArray = newArray.concat(matrix[2]);
  newArray = newArray.concat(matrix[3].reverse());
  } else if (matrix.length === 3) {
  newArray = newArray.concat(matrix[0]);
  newArray = newArray.concat(matrix[1].reverse());
  newArray = newArray.concat(matrix[2]);
  } else if (matrix.length === 2) {
    newArray = newArray.concat(matrix[0]);
    newArray = newArray.concat(matrix[1].reverse());
  } else if (matrix.length === 1) {
    newArray = newArray.concat(matrix[0]);
  }
return newArray;
}