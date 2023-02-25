const { getCheapestOperator, getValue } = require('./index');

// First test checks if Operator B is selected when its rate is -
//  cheaper.
describe('getCheapestOperator', () => {
  test('test if a given prefix returns the correct operator', () => {
    const operators = [
      {name: 'Operator A', prefixes: [
        {num: 1, rate: 1}
      ]},
      {name: 'Operator B', prefixes: [
        {num: 1, rate: 0.5}
      ]},
    ];
    const num = 1;
    expect(getCheapestOperator(operators, num)).toBe('Operator B');
  });
});

// In the next test Operator B's rate is increased to the point -
//  where Operator A should be selected as its cheaper
describe('getCheapestOperator', () => {
  test('test if a given prefix returns the correct operator', () => {
    const operators = [
      {name: 'Operator A', prefixes: [
        {num: 1, rate: 1}
      ]},
      {name: 'Operator B', prefixes: [
        {num: 1, rate: 1.5}
      ]},
    ];
    const num = 1;
    expect(getCheapestOperator(operators, num)).toBe('Operator A');
  });
});

// Here no Operator should be selected since the speciefied prefix does -
//  not appear in any operator
describe('getCheapestOperator', () => {
  test('test if a given prefix returns the correct operator', () => {
    const operators = [
      {name: 'Operator A', prefixes: [
        {num: 1, rate: 1}
      ]},
      {name: 'Operator B', prefixes: [
        {num: 1, rate: 1.5}
      ]},
    ];
    const num = 2;
    expect(getCheapestOperator(operators, num)).toBe('No operator found');
  });
});

// Here I pass in null, and expect no operator found
describe('getCheapestOperator', () => {
  test('test if a given prefix returns the correct operator', () => {
    const operators = [
      {name: 'Operator A', prefixes: [
        {num: 1, rate: 1}
      ]},
      {name: 'Operator B', prefixes: [
        {num: 1, rate: 1.5}
      ]},
    ];
    const num = null;
    expect(getCheapestOperator(operators, num)).toBe('No operator found');
  });
});