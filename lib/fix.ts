function divide(numerator: number, denominator: number): number {
  if (typeof numerator !== 'number') {
    throw new TypeError('Numerator must be a number');
  }
  if (typeof denominator !== 'number') {
    throw new TypeError('Denominator must be a number');
  }
  if (denominator === 0) {
    throw new Error('Cannot divide by zero');
  }
  return numerator / denominator;
}