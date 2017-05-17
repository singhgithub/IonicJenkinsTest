
// import { sum } from  './home'
// import { test, expect} from 'jest'

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const sum = require('./home');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('should return hello', () => {
  expect(gethello()).toBe('hello');
});

test('should return world', () => {
  expect(getworld()).toBe('world');
});

test('should return helloworld', () => {
  expect(gethelloworld()).toBe('helloworld');
});
