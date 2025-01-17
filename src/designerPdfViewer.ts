function designerPdfViewer(h: number[], word: string): number {
    let maxHeight = 0;
    for (const char of word) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        const height = h[index];
        if (height > maxHeight) {
            maxHeight = height;
        }
    }

    const result = maxHeight * word.length;
    console.log(result);
    return result
}

designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc')

// a = 1 = 
// b = 3 = 
// c = 4 = 