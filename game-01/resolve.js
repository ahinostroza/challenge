const getSubSet = (M, N) => {
    const numbers = new Set()
    for (let item of M) {
        const remainder = N - item
        if (numbers.has(remainder)) return [remainder, item]
        numbers.add(item)
    }
    return []
}

const M = [2, 5, 8, 14, 0]
const N = 10

console.log(getSubSet(M, N))