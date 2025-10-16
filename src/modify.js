const uppercaseAll = (...words) => {
  return words.map(word => word.toUpperCase());
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`;
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
