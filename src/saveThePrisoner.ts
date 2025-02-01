function saveThePrisoner(n: number, m: number, s: number): number {
    // Write your code here

    let sum = ((s - 1) + (m - 1))
    let chair = sum % n + 1
    
    return chair
}



saveThePrisoner(7, 19, 2) // 6
saveThePrisoner(3, 7, 3) // 3