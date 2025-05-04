function taumBday(b: number, w: number, bc: number, wc: number, z: number): number {
    // Write your code here
    const B = BigInt(b);
    const W = BigInt(w);
    const BC = BigInt(bc);
    const WC = BigInt(wc);
    const Z = BigInt(z);
    
    const minBlackCost = BC < WC + Z ? BC : WC + Z;
    const minWhiteCost = WC < BC + Z ? WC : BC + Z;
    
    const totalCost = B * minBlackCost + W * minWhiteCost;

    return Number(totalCost);

}


console.log(taumBday(10, 10, 1, 1, 1));
console.log(taumBday(3, 3, 1, 9, 2));




// b = 5, w = 5    bc = 2, wc = 3, z = 4