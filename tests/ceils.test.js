import ceil from '../src/ceil';

describe('ceil', () => {
  // Test for rounding up to the nearest integer (default precision is 0)
  test('should round up to the nearest integer', () => {
    expect(ceil(4.006)).toBe(5); // 4.006 rounds up to 5
    expect(ceil(4.5)).toBe(5);   // 4.5 rounds up to 5
    expect(ceil(-4.5)).toBe(-4); // -4.5 rounds up to -4
  });

  // Test for rounding with a specified precision
  test('should round up to a specified precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01); // Rounds up to 6.01 with precision 2
    expect(ceil(6.004, 1)).toBe(6.1);  // Rounds up to 6.1 with precision 1
  });

  // Test for zero input
  test('should return 0 when input is 0', () => {
    expect(ceil(0)).toBe(0); // 0 remains 0
  });

  // Test for rounding up negative values
  test('should round up negative values', () => {
    expect(ceil(-1.5)).toBe(-1); // -1.5 rounds up to -1
    expect(ceil(-2.7)).toBe(-2); // -2.7 rounds up to -2
  });

  // Test for rounding with no fractional part (integer inputs)
  test('should return the same integer if there is no fractional part', () => {
    expect(ceil(5)).toBe(5); // Integer remains unchanged
    expect(ceil(-3)).toBe(-3); // Negative integer remains unchanged
  });

  // Test for floating point edge cases
  test('should correctly handle floating point precision', () => {
    expect(ceil(1.23456789, 4)).toBe(1.2346); // Rounding up with 4 decimal places
  });

  // Test for large numbers
  test('should round large numbers correctly', () => {
    expect(ceil(9999999.99, 2)).toBe(10000000); // Rounds up to the nearest integer
    expect(ceil(123456789.1234, 3)).toBe(123456789.124); // Rounds up with 3 decimal places
  });

  // Test for edge cases like NaN, Infinity
  test('should return NaN for NaN input', () => {
    expect(ceil(NaN)).toBeNaN(); // NaN input should return NaN
  });

  test('should return Infinity for Infinity input', () => {
    expect(ceil(Infinity)).toBe(Infinity); // Infinity remains Infinity
  });

  test('should return -Infinity for -Infinity input', () => {
    expect(ceil(-Infinity)).toBe(-Infinity); // -Infinity remains -Infinity
  });
});
