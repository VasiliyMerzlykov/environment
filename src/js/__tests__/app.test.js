/* eslint-disable no-restricted-syntax */
function sum(items) {
    let result = 0;
    for (const item of items) {
      result += item;
    }
    return result;
  }
  
  test('should sum', () => {
    const result = sum([1, 2, 3]);
  
    expect(result).toBe(6);
  });