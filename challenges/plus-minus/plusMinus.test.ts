import { expect, test } from 'vitest'
import { plusMinus } from  './plusMinus'

test('Example 1: ', () => {
    expect(plusMinus([1, 1, 0, -1, -1])).toStrictEqual(
        [
            "0.400000",
            "0.400000",
            "0.200000"
        ]
    )
})

test('Example 2: ', () => {
    expect(plusMinus([-4, 3, -9, 0, 4, 1])).toStrictEqual(
        [
            "0.500000",
            "0.333333",
            "0.166667"
        ]
    )
})

test('n is 1 with value [1]: ', () => {
    expect(plusMinus([1])).toStrictEqual(
        [
            "1.000000",
            "0.000000",
            "0.000000"
        ]
    )
})

test('n is 1 with value [-1]: ', () => {
    expect(plusMinus([-1])).toStrictEqual(
        [
            "0.000000",
            "1.000000",
            "0.000000"
        ]
    )
})

test('n is 1 with value [0]: ', () => {
    expect(plusMinus([0])).toStrictEqual(
        [
            "0.000000",
            "0.000000",
            "1.000000"
        ]
    )
})

test('[-100, -100, -100, 0, 0, 100] returns ["0.166667", "0.500000", "0.333333"]', () => {
    expect(plusMinus([-100, -100, -100, 0, 0, 100])).toStrictEqual(
        [
            "0.166667",
            "0.500000",
            "0.333333"
        ]
    )
})
