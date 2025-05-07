const directions: [number, number][] = [
    [-1, 0],  
    [1, 0],   
    [0, -1],  
    [0, 1],   
    [-1, -1], 
    [-1, 1],  
    [1, -1],  
    [1, 1]    
];

function queensAttack(n: number, k: number, r_q: number, c_q: number, obstacles: number[][]): number {
    const customSet = new Set()
    for (const [r_o,c_o] of obstacles) {
        customSet.add(`${r_o},${c_o}`);
    }

    let counter = 0

    for (const [dr, dc] of directions) {
        let r = r_q + dr; 
        let c = c_q + dc;

        while (r >= 1 && r <= n && c >= 1 && c <= n) { 
            if (customSet.has(`${r},${c}`)) { 
                break;
            }
            counter++; 
            r += dr; 
            c += dc;
        }
    }
    console.log(counter);
    return 1
}



queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]])