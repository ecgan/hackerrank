function miniMaxSum(arr: number[]) {
    const sorted = [...arr].sort((a, b) => a - b)

    const lastIdx = sorted.length - 1

    return [
        sorted[0] + sorted[1] + sorted[2] + sorted[3],
        sorted[lastIdx] + sorted[lastIdx - 1] + sorted[lastIdx - 2] + sorted[lastIdx - 3],
    ]
}

export { miniMaxSum };
