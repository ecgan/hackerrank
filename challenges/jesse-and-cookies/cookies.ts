import { Heap } from './Heap'

function cookies(k: number, A: number[]): number {
    const heap = new Heap<number>((a, b) => a - b)
    A.forEach((el) => {
        heap.insert(el)
    })

    let iterations = 0
    while (heap.array.length >= 2 && heap.array[0] < k) {
        const a = heap.remove() as number
        const b = heap.remove() as number

        const c = a + (2 * b)
        heap.insert(c)

        iterations++
    }

    return heap.array[0] < k ? -1 : iterations
}

export { cookies };
