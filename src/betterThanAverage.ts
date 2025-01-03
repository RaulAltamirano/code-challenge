export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
    const sum = classPoints.reduce((prev, current) => prev + current)
    const med = (sum / classPoints.length)
    if (med > yourPoints)
        return true;
    else return false
}


betterThanAverage([2, 3], 5)
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69);
