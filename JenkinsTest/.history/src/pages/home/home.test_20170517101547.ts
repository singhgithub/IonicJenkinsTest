
import { sum } from  './home'
import { test, expect} from 'jest'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});