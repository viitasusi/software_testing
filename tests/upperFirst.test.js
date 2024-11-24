import upperFirst from '../src/upperFirst';

describe('upperFirst', () => {
  // Test for empty string
  test('should return an empty string for an empty input', () => {
    expect(upperFirst('')).toBe('');
  });

  // Test for single word lowercase string
  test('should convert the first character to uppercase', () => {
    expect(upperFirst('hello')).toBe('Hello');
  });

  // Test for string with the first character already in uppercase
  test('should return the same string if the first character is already uppercase', () => {
    expect(upperFirst('Hello')).toBe('Hello');
  });

  // Test for all uppercase string
  test('should return the same string if the first character is uppercase and others are also uppercase', () => {
    expect(upperFirst('HELLO')).toBe('HELLO');
  });

  // Test for single character string
  test('should return the same single character if it is already uppercase', () => {
    expect(upperFirst('H')).toBe('H');
  });

  // Test for string with spaces
  test('should convert the first character of the string to uppercase', () => {
    expect(upperFirst(' hello world')).toBe(' Hello world');
  });

  // Test for string with numbers
  test('should not alter numbers', () => {
    expect(upperFirst('123abc')).toBe('123abc');
  });

  // Test for string with special characters
  test('should convert the first letter after special characters to uppercase', () => {
    expect(upperFirst('!hello')).toBe('!Hello');
  });

  // Test for undefined input
  test('should return an empty string for undefined input', () => {
    expect(upperFirst(undefined)).toBe('');
  });

  // Test for null input
  test('should return an empty string for null input', () => {
    expect(upperFirst(null)).toBe('');
  });
});
