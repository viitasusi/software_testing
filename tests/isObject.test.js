import isObject from '../src/isObject';

describe('isObject', () => {
  it('should return true for plain objects', () => {
    expect(isObject({})).toBe(true);
  });

  it('should return true for arrays', () => {
    expect(isObject([1, 2, 3])).toBe(true);
  });

  it('should return true for functions', () => {
    expect(isObject(() => {})).toBe(true);
    expect(isObject(function () {})).toBe(true);
  });

  it('should return true for instances of built-in objects', () => {
    expect(isObject(new Date())).toBe(true);
    expect(isObject(new RegExp('abc'))).toBe(true);
    expect(isObject(new Number(1))).toBe(true);
    expect(isObject(new String('test'))).toBe(true);
  });

  it('should return false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isObject(undefined)).toBe(false);
  });

  it('should return false for primitive values', () => {
    expect(isObject(123)).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(Symbol('sym'))).toBe(false);
  });

  it('should return true for objects created with `Object.create(null)`', () => {
    expect(isObject(Object.create(null))).toBe(true);
  });
});
