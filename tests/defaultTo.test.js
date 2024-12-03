import defaultTo from '../src/defaultTo';

describe('defaultTo', () => {
  test('returns given value', () => {
    expect(defaultTo(1, 10)).toBe(1);
  });

  test('returns default value instead of undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });
});