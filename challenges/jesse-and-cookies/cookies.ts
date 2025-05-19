import { sortedIndex } from 'lodash';

function cookies(k: number, A: number[]): number {
    const sorted = [...A].sort((a, b) => a - b)

    let iterations = 0
    while (sorted.length >= 2 && sorted[0] < k) {
        const a = sorted.shift() as number
        const b = sorted.shift() as number

        const newCookie = a + (2 * b)
        const newIndex = sortedIndex(sorted, newCookie)
        sorted.splice(newIndex, 0, newCookie)

        iterations++
    }

    return sorted[0] < k ? -1 : iterations
}

export { cookies };
