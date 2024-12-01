import memoize from '../src/memoize';

describe('memoize', () => {
  it('should memoize the result of a function', () => {
    const mockFunction = jest.fn((x) => x * 2);
    const memoizedFunction = memoize(mockFunction);

    expect(memoizedFunction(2)).toBe(4); // First call, result calculated
    expect(memoizedFunction(2)).toBe(4); // Cached result
    expect(mockFunction).toHaveBeenCalledTimes(1); // Function should only be called once
  });

  it('should use a custom resolver for cache keys if provided', () => {
    const mockFunction = jest.fn((x, y) => x + y);
    const customResolver = (x, y) => `${x}-${y}`;
    const memoizedFunction = memoize(mockFunction, customResolver);

    expect(memoizedFunction(1, 2)).toBe(3); // First call, result calculated
    expect(memoizedFunction(1, 2)).toBe(3); // Cached result
    expect(mockFunction).toHaveBeenCalledTimes(1); // Function should only be called once

    expect(memoizedFunction(2, 1)).toBe(3); // Different cache key
    expect(mockFunction).toHaveBeenCalledTimes(2); // Called again due to different key
  });

  it('should throw an error if the first argument is not a function', () => {
    expect(() => memoize(null)).toThrow('Expected a function');
  });

  it('should throw an error if the resolver is not a function', () => {
    const mockFunction = jest.fn((x) => x * 2);
    expect(() => memoize(mockFunction, 123)).toThrow('Expected a function');
  });

  it('should allow replacing the cache with a custom cache implementation', () => {
    const mockFunction = jest.fn((x) => x * 2);
    memoize.Cache = WeakMap; // Replace cache with WeakMap
    const memoizedFunction = memoize(mockFunction);
  
    const key = {}; // Use an object as the key
    expect(memoizedFunction(key)).toBe(4); // First call, result calculated
    expect(memoizedFunction(key)).toBe(4); // Cached result
    expect(mockFunction).toHaveBeenCalledTimes(1);
  
    // Restore default cache for other tests
    memoize.Cache = Map;
  });  

  it('should expose the cache property', () => {
    const mockFunction = jest.fn((x) => x * 2);
    const memoizedFunction = memoize(mockFunction);
  
    const key = {}; // Use an object as the key
    memoizedFunction(key);
    expect(memoizedFunction.cache.has(key)).toBe(true);
    expect(memoizedFunction.cache.get(key)).toBe(4);
  });
  
  it('should handle a scenario where cache is modified directly', () => {
    const mockFunction = jest.fn((x) => x * 2);
    const memoizedFunction = memoize(mockFunction);
  
    const key = {}; // Use an object as the key
    memoizedFunction(key); // First call
    memoizedFunction.cache.set(key, 10); // Modify the cache directly
    expect(memoizedFunction(key)).toBe(10); // Cached result should reflect modification
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
  
  it('should support functions with no arguments', () => {
    const mockFunction = jest.fn(() => 42);
    const memoizedFunction = memoize(mockFunction);
  
    const key = {}; // Use an object as the key for WeakMap compatibility
    memoizedFunction(key); // First call
    expect(memoizedFunction(key)).toBe(42); // Cached result
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
})  
