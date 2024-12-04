import reduce from '../src/reduce';

describe('reduce', () => {
  test('reduces an array with a sum function', () => {
    // Test reducing integer numbers
    const intArray = [1, 2, 3, 4];
    expect(reduce(intArray, (sum, n) => sum + n, 0)).toBe(10);
    // Test reducing decimal numbers
    const floatArray = [0.1, 0.2, 0.3, 0.4];
    expect(reduce(floatArray, (sum, n) => sum + n, 0)).toBeCloseTo(1.0);
  });

  test('handles strings as collections', () => {
    const result = reduce("hello", (acc, char) => acc + char.toUpperCase(), "");
    expect(result).toBe("HELLO");
  });

  test('reduces with and without initial value', () => {
    expect(reduce([1, 2, 3], (product, n) => product * n)).toBe(6);
    expect(reduce([1, 2, 3], (product, n) => product * n, 0)).toBe(0);
  });

  test('returns the initial value for empty array', () => {
    expect(reduce([], (sum, n) => sum + n, 5)).toBe(5);
  });

  test('returns undefined for empty array without initial value', () => {
    expect(reduce([], (sum, n) => sum + n)).toBeUndefined();
  });

  test('returns undefined for non-iterable input', () => {
    expect(reduce(10, () => {})).toBeUndefined();
  });

  test('reduces an object to a grouped result', () => {
    // Group object keys by their values
    const result = reduce({ a: 1, b: 1, c: 2 }, (acc, value, key) => {
      acc[value] = acc[value] || [];
      acc[value].push(key);
      return acc;
    }, {});

    // Sort the arrays to ignore item order in comparison
    Object.keys(result).forEach(key => {
      result[key].sort();
    });
    expect(result).toEqual({ 1: ['a', 'b'].sort(), 2: ['c'].sort() });
  });
});