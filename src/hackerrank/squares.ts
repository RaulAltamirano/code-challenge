function squares(a: number, b: number): number {
    let first = Math.ceil(Math.sqrt(a));
    let last = Math.floor(Math.sqrt(b));
    console.log(first, last);

    return Math.max(0, last - first + 1);
}



squares(3, 10)