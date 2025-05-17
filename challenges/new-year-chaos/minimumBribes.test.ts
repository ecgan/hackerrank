import { expect, test } from 'vitest'
import { minimumBribes } from  './minimumBribes'

test('Example 1: ', () => {
    expect(minimumBribes([1, 2, 3, 5, 4, 6, 7, 8])).toEqual(1)
})

test('Example 2: ', () => {
    expect(minimumBribes([4, 1, 2, 3])).toEqual("Too chaotic")
})

test('Example 3: ', () => {
    expect(minimumBribes([2, 1, 5, 3, 4])).toEqual(3)
})

test('Example 4: ', () => {
    expect(minimumBribes([2, 5, 1, 3, 4])).toEqual("Too chaotic")
})

test('Elements at the back can bribe: ', () => {
    expect(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])).toEqual(7)
})
