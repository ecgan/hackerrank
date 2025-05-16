import { expect, test } from 'vitest'
import { miniMaxSum } from  './miniMaxSum'

test('Example 1: ', () => {
    expect(miniMaxSum([1, 3, 5, 7, 9])).toStrictEqual([16, 24])
})

test('Example 2: ', () => {
    expect(miniMaxSum([1, 2, 3, 4, 5])).toStrictEqual([10, 14])
})
