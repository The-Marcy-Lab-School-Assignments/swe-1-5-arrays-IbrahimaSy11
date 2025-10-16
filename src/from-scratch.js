const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront) {
    arr.unshift(value);
  } else {
    arr.push(value);
  }
};

const reverseString = (str) => {
  return str.split('').reverse().join('');
};

const newArrayFullOf = (value, numOfValue) => {
  return Array(numOfValue).fill(value);
};

const insertIntoMiddle = (arr, value) => {
  const mid = Math.floor(arr.length / 2);
  arr.splice(mid, 0, value);
};

const deleteFromMiddle = (arr) => {
  const mid = Math.floor(arr.length / 2);
  arr.splice(mid, 1);
};

const isRightIndex = (arr, value, index) => {
  return index >= 0 && index < arr.length && arr[index] === value;
};

const roundAllNumsDown = (arr) => {
  return arr.map(Math.floor);
};

const getAllYCoordinates = (arrOfCoords) => {
  return arrOfCoords.map(coord => coord[1]);
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
