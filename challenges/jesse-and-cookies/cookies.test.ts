import { expect, test } from 'vitest'
import { cookies } from  './cookies'

test('Example 1: ', () => {
    expect(cookies(9, [2, 7, 3, 6, 4, 6])).toBe(4)
})

test('Example 2: ', () => {
    expect(cookies(7, [1, 2, 3, 9, 10, 12])).toBe(2)
})

test('Not possible with 1 element: ', () => {
    expect(cookies(5, [3])).toBe(-1)
})

test('Not possible with 2 elements: ', () => {
    expect(cookies(100, [2, 3])).toBe(-1)
})
