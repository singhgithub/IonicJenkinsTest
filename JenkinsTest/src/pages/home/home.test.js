
// import { sum } from  './home'
// import { test, expect} from 'jest'

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const sum = require('./home');
const hello = require('./home');
const world = require('./home');
const helloworld = require('./home');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('should return hello', () => {
  expect(hello()).toBe('hello');
});

test('should return world', () => {
  expect(world()).toBe('world');
});

test('should return helloworld', () => {
  expect(helloworld()).toBe('helloworld');
});
