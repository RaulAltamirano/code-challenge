function findNextSquare(sq: number): number {
    let res = Math.sqrt(sq)
    if (res % 1 == 0) {
        let next = res + 1
        let nextSquare = next * next
        return nextSquare
    } else return -1;
}



findNextSquare(319225)
findNextSquare(121)
findNextSquare(625)
// Sould return -1 for numbers which aren't perfect squares
findNextSquare(155)