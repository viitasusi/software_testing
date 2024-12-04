import defaultTo from '../src/defaultTo';

describe('defaultTo', () => {
  test('returns given value', () => {
    expect(defaultTo(1, 10)).toBe(1);
  });

  test('returns given object', () => {
    const obj = { name: 'Thomas' };
    expect(defaultTo(obj, { name: 'Peter' })).toEqual(obj);
  });

  test('returns default value instead of undefined', () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  test('returns default value instead of null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  test('returns default value instead of NaN', () => {
    expect(defaultTo(NaN, 10)).toBe(10);
  });

  test('returns given false value instead of default', () => {
    expect(defaultTo(false, true)).toBe(false);
  });

  test('returns given 0 value instead of default', () => {
    expect(defaultTo(0, 10)).toBe(0);
  });

  test('returns given empty string instead of default', () => {
    expect(defaultTo('', 'Hi')).toBe('');
  });

  test('returns given empty object', () => {
    expect(defaultTo({}, { name: 'Peter' })).toEqual({});
  });

});