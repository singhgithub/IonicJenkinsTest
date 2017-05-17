
// import { sum } from  './home'
// import { test, expect} from 'jest'

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const home = require('./home');

test('adds 1 + 2 to equal 3', () => {
  expect(home.sum(1, 2)).toBe(3);
});

test('should return hello', () => {
  expect(home.gethello()).toBe(100);
});

test('should return world', () => {
  expect(home.getworld()).toBe('world');
});

test('should return helloworld', () => {
  expect(home.gethelloworld()).toBe('helloworld');
});
