function cutTheSticks(arr: any[]) {
    const result = [];
    
    while (arr.length > 0) {
        result.push(arr.length);
        const min = Math.min(...arr);
        arr = arr.map((stick: number) => stick - min).filter((stick: number) => stick > 0);
    }
    console.log(result);
    return result;
}

cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1])