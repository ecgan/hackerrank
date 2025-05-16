function superDigit(n: string, k: number): number {
    if (k === -1) {
        return n.split('')
            .map( el => parseInt(el))
            .reduce((acc, cur) => acc + cur, 0)
    }

    if (k === 0) {
        if (n.length === 1) {
            return parseInt(n)
        }

        const num = superDigit(n, -1)
        return superDigit(num.toString(), 0)
    }

    const repeatedSum = superDigit(n, -1) * k
    return superDigit(repeatedSum.toString(), 0)
}

export { superDigit };
