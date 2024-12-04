import clamp from '../src/clamp';

describe('clamp', () => {
  test('clamps number to upper bound', () => {
    expect(clamp(10, -5, 5)).toBe(5);
    expect(clamp(-5, -20, -10)).toBe(-10);
  });

  test('clamps number to lower bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  test('clamps decimals', () => {
    expect(clamp(2.5, 1.5, 3.5)).toBe(2.5);
    expect(clamp(4.5, 2.5, 3.5)).toBe(3.5);
  });

  test('returns number within bounds', () => {
    expect(clamp(7, 5, 10)).toBe(7); // Within positive bounds
    expect(clamp(-10, -20, -5)).toBe(-10); // Within negative bounds
    expect(clamp(3, -10, 10)).toBe(3); // Within mixed bounds
  });

  test('returns lower bound when number equals lower bound', () => {
    expect(clamp(-5, -5, 5)).toBe(-5);
  });

  test('returns upper bound when number equals upper bound', () => {
    expect(clamp(5, -5, 5)).toBe(5);
  });

  test('returns the number unchanged when other bound is NaN', () => {
    expect(clamp(5, NaN, 10)).toBe(5);
    expect(clamp(5, -5, NaN)).toBe(5);
  });

  test('returns NaN when number is NaN', () => {
    expect(clamp(NaN, 5, 10)).toBe(NaN);
  });

  test('swaps bounds when lower bound > upper bound', () => {
    expect(clamp(3, 10, 5)).toBe(3);
  });

  test('handles large positive numbers', () => {
    expect(clamp(1e10, -1e5, 1e5)).toBe(1e5); // Clamps to upper bound
  });

  test('handles large negative numbers', () => {
    expect(clamp(-1e10, -1e5, 1e5)).toBe(-1e5); // Clamps to lower bound
  });
});