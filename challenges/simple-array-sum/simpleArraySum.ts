function simpleArraySum(ar: number[]): number {
    return ar.reduce((acc, cur) => acc + cur, 0)
}

export { simpleArraySum };
