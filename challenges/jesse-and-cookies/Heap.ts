const Heap = class<T> {
    array: T[]
    compareFn: (a: T, b: T) => number

    constructor (compareFn: (a: T, b: T) => number) {
        this.array = []
        this.compareFn = compareFn
    }

    private parentIndex (i: number) {
        return Math.floor((i - 1) / 2);
    }

    private leftChildIndex (i: number) {
        return 2 * i + 1;
    }

    private rightChildIndex (i: number) {
        return 2 * i + 2;
    }

    private heapify (i: number) {
        const l = this.leftChildIndex(i)
        const r = this.rightChildIndex(i)

        let target = i

        if (l < this.array.length) {
            const compareLeftResult = this.compareFn(this.array[i], this.array[l])
            if ( compareLeftResult !== 0) {
                target = compareLeftResult < 0 ? i : l
            }
        }

        if (r < this.array.length) {
            const compareRightResult = this.compareFn(this.array[target], this.array[r]) 
            if (compareRightResult !== 0) {
                target = compareRightResult < 0 ? target : r
            }
        }

        if (target !== i) {
            const temp = this.array[i]
            this.array[i] = this.array[target]
            this.array[target] = temp
            this.heapify(target)
        }
    }

    insert (value: T) {
        this.array.push(value)

        let i = this.array.length - 1
        while (i !== 0 ) {
            const currentValue = this.array[i]
            const parentValue = this.array[this.parentIndex(i)]
            const compareResult = this.compareFn(parentValue, currentValue)

            if (compareResult === 0) {
                break
            }

            this.array[this.parentIndex(i)] = compareResult < 0 ? parentValue : currentValue
            this.array[i] = compareResult < 0 ? currentValue : parentValue

            i = this.parentIndex(i)
        }
    }

    remove () {
        const value = this.array.shift()

        const lastValue = this.array.pop()
        if (lastValue !== undefined) {
            this.array.unshift(lastValue)
        }

        if (this.array.length >= 1) {
            this.heapify(0)
        }

        return value
    }
}

export { Heap }