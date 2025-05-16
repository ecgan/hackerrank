const splitSum = (num: number) => {
    return num.toString()
        .split('')
        .map( el => parseInt(el))
        .reduce((acc, cur) => acc + cur, 0)
}

function superDigit(n: string, k: number): number {
    const initialSum = splitSum(parseInt(n.trim()))
    const repeatedSum = initialSum * k

    let sum = repeatedSum
    while (sum >= 10) {
        sum = splitSum(sum)
    }

    return sum
}

export { superDigit };
