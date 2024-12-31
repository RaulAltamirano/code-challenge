function getMoneySpent(keyboards: Array<number>, drives: Array<number>, b: number) {
    let moreExpensive = -1

    const sortedKeyboards = keyboards.sort((a, b) => a - b)
    const sortedDrives = drives.sort((a, b) => b - a)
    for (let i = 0; i < sortedKeyboards.length; i++) {
        const keyboard = sortedKeyboards[i];
        if (keyboard > b) break
        for (const drive of sortedDrives) {
            const currentPrice = keyboard + drive
            if (currentPrice > b) continue
            if (currentPrice > moreExpensive)
                moreExpensive = currentPrice
            break
        }
    }
    console.log(moreExpensive);
    return moreExpensive
}

// function getMoneySpent(keyboards: Array<number>, drives: Array<number>, b: number): number {
//     let moreExpensive = -1;

//     // Ordena ambos arreglos en orden ascendente.
//     const sortedKeyboards = keyboards.sort((a, b) => a - b);
//     const sortedDrives = drives.sort((a, b) => a - b);

//     // Función para búsqueda binaria.
//     const binarySearch = (array: Array<number>, target: number): number => {
//         let left = 0, right = array.length - 1;
//         let best = -1;

//         while (left <= right) {
//             const mid = Math.floor((left + right) / 2);
//             if (array[mid] <= target) {
//                 best = mid; // Guarda el índice del mejor elemento encontrado.
//                 left = mid + 1; // Busca valores mayores.
//             } else {
//                 right = mid - 1; // Reduce el rango de búsqueda.
//             }
//         }

//         return best; // Devuelve el índice del mejor elemento o -1 si no existe.
//     };

//     // Itera sobre teclados.
//     for (const keyboard of sortedKeyboards) {
//         if (keyboard > b) break; // Si el teclado excede el presupuesto, no lo evalúes.

//         // Busca el mejor drive para este teclado.
//         const remainingBudget = b - keyboard;
//         const bestDriveIndex = binarySearch(sortedDrives, remainingBudget);

//         if (bestDriveIndex !== -1) {
//             const currentPrice = keyboard + sortedDrives[bestDriveIndex];
//             if (currentPrice > moreExpensive) {
//                 moreExpensive = currentPrice;
//             }
//         }
//     }

//     return moreExpensive;
// }


getMoneySpent([3, 1], [5, 2, 8], 10)
getMoneySpent([4], [5], 5)

