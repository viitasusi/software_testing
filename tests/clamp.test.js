import clamp from '../src/clamp';

describe('clamp', () => {
  test('clamps number to upper bound', () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });

  test('clamps number to lower bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
    expect(clamp(3, 5, 10))
  });

  test('returns number within bounds', () => {
    expect(clamp(7, 5, 10)).toBe(7);
  });
});