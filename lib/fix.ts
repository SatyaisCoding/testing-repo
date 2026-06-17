function divide(numerator: number, denominator: number): number {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new TypeError('Both numerator and denominator must be numbers');
  }
  if (denominator === 0) {
    throw new Error('Cannot divide by zero');
  }
  return numerator / denominator;
}

module.exports = { divide };