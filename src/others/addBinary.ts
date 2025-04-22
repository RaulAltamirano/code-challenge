function addBinary(a: number, b: number): string {
    let  sum = a + b
    let res = sum.toString(2)
    console.log({res});
    return res
}


addBinary(12,1) 