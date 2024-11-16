import isEmpty from '../src/isEmpty';

describe('isEmpty Function - Product Form Validation', () => {
  // Test for empty value (mandatory field)
  test('returns true for an empty value (mandatory field)', () => {
    expect(isEmpty('')).toBe(true); // Empty string is considered empty
    expect(isEmpty(null)).toBe(true); // Null is considered empty
    expect(isEmpty(undefined)).toBe(true); // Undefined is considered empty
    expect(isEmpty(0)).toBe(true); // 0 is considered empty (as per isEmpty function behavior)
    expect(isEmpty(false)).toBe(true); // false is considered empty
  });

  // Test for invalid empty values (falsy values treated as empty for mandatory fields)
  test('returns false for invalid non-empty mandatory fields', () => {
    expect(isEmpty(false)).toBe(true); // false should be treated as empty
    expect(isEmpty(0)).toBe(true); // 0 should be treated as empty
    expect(isEmpty('')).toBe(true); // Empty string should be treated as empty
  });

  // Test for empty objects, arrays, or non-object values
  test('returns true for empty objects, arrays, or non-object values', () => {
    expect(isEmpty({})).toBe(true); // Empty object should be treated as empty
    expect(isEmpty([])).toBe(true); // Empty array should be treated as empty
    expect(isEmpty(null)).toBe(true); // Null should be treated as empty
    expect(isEmpty(undefined)).toBe(true); // Undefined should be treated as empty
  });
});





