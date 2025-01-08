function maximizeWin(prizePositions: number[], k: number): number {
    const n = prizePositions.length;
    if (n === 0) {
        return 0;
    }

    const counts: number[] = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        const start = prizePositions[i];
        const end = start + k;
        let count = 0;
        let j = i;
        while (j < n && prizePositions[j] <= end) {
            count++;
            j++;
        }
        counts[i] = count;
    }

    let maxPrizes = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const start1 = prizePositions[i];
            const end1 = start1 + k;
            const start2 = prizePositions[j];
            const end2 = start2 + k;

            let currentPrizes = 0;
            let prizesCollected = new Set<number>();
            for (let l = 0; l < n; l++) {
                if ((prizePositions[l] >= start1 && prizePositions[l] <= end1) ||
                    (prizePositions[l] >= start2 && prizePositions[l] <= end2)) {
                    prizesCollected.add(prizePositions[l]);
                }
            }
            currentPrizes = prizesCollected.size;

            maxPrizes = Math.max(maxPrizes, currentPrizes);
        }
    }
    console.log(maxPrizes);
    return maxPrizes;
}


maximizeWin([1, 1, 2, 2, 3, 3, 5], 2)
// maximizeWin([1,2,3,4], 0)








// for (let index = 0; segments < k + 1; index++) {
//     const element = sort[index];
//     console.log({element});
//     for (let indexCursor = index + 1; indexCursor < sort.length; indexCursor++) {
//         const pointer = sort[indexCursor];
//         // console.log('current pointer', pointer, 'and element', element);
//         const diff =  Math.abs(element - pointer)
//         console.log('diff elements', diff);
//         if(diff > 2) {
//             index = indexCursor
//          sum ++   
//             segments ++
//             break
//         }
//     }
//     console.log(element, 'and cursor', index, 'and segments ' ,segments, 'and sum', sum);
// }