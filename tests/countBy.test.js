import countBy from '../src/countBy';

describe('countBy', () => {
  test('counts occurrences of same value', () => {
    const numbers = [2, 2, 3, 5, 5, 5, 5];
    expect(countBy(numbers, value => value)).toEqual({ 2: 2, 3: 1, 5: 4 })
  });

  test('counts objects by property', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred', active: false }
    ];
    expect(countBy(users, value => value.active)).toEqual({ true: 2, false: 1 });
  });

  test('counts even and odd numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(countBy(numbers, value => value % 2 === 0 ? 'even' : 'odd')).toEqual({ even: 2, odd: 3});
  });

  test('counts words by their length', () => {
    const words = ["cat", "dog", "marsupial"];
    expect(countBy(words, value => value.length)).toEqual({ 3: 2, 9: 1 });
  })

  test('handles empty input', () => {
    expect(countBy([], value => value)).toEqual({});
    expect(countBy({}, value => value)).toEqual({});
  });

  test('handles null values', () => {
    const nullValues = [null, undefined, undefined, 0, null];
    expect(countBy(nullValues, value => value)).toEqual({ null: 2, undefined: 2, 0: 1 });
  });

  test('handles multiple types of values', () => {
    const types = ['Hello', 1, 2, 3, true];
    expect(countBy(types, value => typeof value)).toEqual({ string: 1, number: 3, boolean: 1 });
  });

  test('counts objects with missing keys', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'betty', active: true },
      { user: 'fred' } // Missing the 'active' key
    ];
    expect(countBy(users, value => value.active)).toEqual({ true: 2, undefined: 1 });
  });
});