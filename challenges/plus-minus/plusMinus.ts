type PositiveCount = number
type NegativeCount = number
type ZeroCount = number

type Counts = [PositiveCount, NegativeCount, ZeroCount]

function plusMinus(arr: number[]): string[] {
    const counts = arr.reduce((acc, cur) => {
        return [
            cur > 0 ? acc[0] + 1: acc[0],
            cur < 0 ? acc[1] + 1: acc[1],
            cur === 0 ? acc[2] + 1: acc[2]
        ] as Counts
    }, [0, 0, 0] as Counts)

    return [
        (counts[0] / arr.length).toFixed(6),
        (counts[1] / arr.length).toFixed(6),
        (counts[2] / arr.length).toFixed(6)
    ]
}

export { plusMinus };
