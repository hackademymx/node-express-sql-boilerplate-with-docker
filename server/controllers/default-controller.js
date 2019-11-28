/** Example controller */
const sum = (req, res) => {
  const sum = 5 + 4;
  res.send(`La suma de 5 + 4 = ${sum}`);
};

/** Example controller */
const multiply = (req, res) => {
  const multiply = 5 * 9;
  res.send(`La multiplicación de 5 * 9 = ${multiply}`);
};

export { sum, multiply };
