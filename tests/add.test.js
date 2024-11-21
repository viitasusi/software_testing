import add from '../src/add';

describe('add Function - Cart Total Counting', () => {
  test('adds integers', () => {
    expect(add(1, 2)).toBe(3); // Positive integers
    expect(add(-1, -2)).toBe(-3); // Negative integers
    expect(add(-1, 1)).toBe(0); // Opposite integers
    expect(add(-1, 2)).toBe(1); // Positive and negative integers
  });

  test('adds decimals', () => {
    expect(add(1.5, 1.7)).toBeCloseTo(3.2, 5); // Positive decimals
    expect(add(-1.5, -1.7)).toBeCloseTo(-3.2, 5); // Negative decimals
    expect(add(-1.5, 1.5)).toBeCloseTo(0); // Opposite decimals
    expect(add(-1.5, 2.7)).toBeCloseTo(1.2); // Positive and negative decimals
  });
});