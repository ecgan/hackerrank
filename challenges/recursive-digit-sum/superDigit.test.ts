import { expect, test } from 'vitest'
import { superDigit } from  './superDigit'

test('Example 1', () => {
  expect(superDigit('9875', 4)).toBe(8)
})

test('Example 2', () => {
  expect(superDigit('148', 3)).toBe(3)
})

test('Example 3', () => {
  expect(superDigit('123', 3)).toBe(9)
})

test('Single digit with repeat 1', () => {
  expect(superDigit('5', 1)).toBe(5)
})

test('10 digit n with maximum k at 100000', () => {
  expect(superDigit('1234567890', 100000)).toBe(9)
})
